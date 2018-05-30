/* eslint class-methods-use-this:0 */

'use strict'
import React, { Component } from 'react';
import axios from 'axios';
import store, { addTeam, resetTeams, createScore, addCategoryThunkerator } from '../store';


export default class BuildGame extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      fellows: [],
      cohorts: [],
      cohortChoice: {},
      fellowIdsAdded: [],
    }
  }

  componentDidMount() {
    const grabEverything = async () => {
      const categories = await axios.get('/api/categories');

      // let fellows = await axios.get('/api/users/fellows');
      // fellows = fellows.data;

      const cohorts = await axios.get('/api/users/cohorts');
      this.setState({ cohorts: cohorts.data, categories: categories.data })
    }
    grabEverything();
  }

  handleCohortChoice = (event) => {
    event.preventDefault();
    const cohortId = +event.target.cohort.value;
    const cohortChoice = this.state.cohorts.find(cohort => cohort.id === cohortId);

    const getFellows = async (cohortId) => {
      const fellows = await axios.get(`/api/users/fellows/${cohortId}`);
      this.setState({ fellows: fellows.data })

    }
    getFellows(cohortId);
    this.setState({ cohortChoice });
  }

  handleAddingTeam = (event) => {

    event.preventDefault();
    const fellowId = event.target.fellow.value;
    const teamName = event.target.teamName.value;
    if (this.state.fellowIdsAdded.indexOf(fellowId) > -1) return;
    const team = {
      fellowId,
      teamName,
    }
    store.dispatch(addTeam(team));
    store.dispatch(createScore(fellowId))
    this.setState({ fellowIdsAdded: [...this.state.fellowIdsAdded, fellowId] })
    event.target.teamName.value = '';
  }

  handleResetTeams = (event) => {
    event.preventDefault();
    store.dispatch(resetTeams());
    this.setState({ fellowIdsAdded: [] })
  }

  handleCategorySelected = (event) => {
    const categoryId = +event.target.dataset.category_id;
    store.dispatch(addCategoryThunkerator(categoryId));

    const categories = this.state.categories.filter(category => {
      return category.id !== categoryId;
    })
    this.setState({ categories })
  }

  render() {
    const fellowChoiceDisabled = !this.state.cohortChoice.id;
    return (
      <div>
        <div className="hostPanelItem">
          <h5>Choose Cohort</h5>
          <form onSubmit={this.handleCohortChoice}>
            <select id="cohort">
              {
                this.state.cohorts.map(cohort => <option value={cohort.id} key={`cohort${cohort.id}`}>{cohort.name}</option>)
              }
            </select><button type="submit">Select</button>
          </form>
        </div>
        {
          fellowChoiceDisabled
            ? ''
            : <div className="hostPanelItem">
              <form onSubmit={this.handleAddingTeam}>
                <select id="fellow" >
                  {
                    this.state.fellows.map(fellow => <option value={fellow.id} key={`fellow${fellow.id}`}>{fellow.firstLast}</option>)
                  }
                </select>
                <br />
                <label>Team Name:</label>
                <input id="teamName" />
                <br />
                <button type="submit">Add Team</button>
              </form>
              <div className="hostPanelItem button" onClick={this.handleResetTeams} >Reset Teams</div>
            </div>
        }
        <div className="hostPanelItem categories">
          <h5>Choose Categories</h5>
          <h6>Choose Cohort Week: </h6>
          <select id="cohortWeek" >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <br />
          {
            this.state.categories.map(category => (
              <div
                key={category.id}
                className="hostPanelItem category button"
                onClick={this.handleCategorySelected}
                data-category_id={category.id}>
              {category.name}
              </div>))
          }
        </div>

      </div>
    );
  }
}
