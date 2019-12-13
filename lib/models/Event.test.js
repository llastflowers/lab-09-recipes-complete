const mongoose = require('mongoose');
const Event = require('./Event');

describe('Event model', () => {
  it('has a required recipeId', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.recipeId.message).toEqual('Path `recipeId` is required.');
  });

  it('has a required dateOfEvent', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.dateOfEvent.message).toEqual('Path `dateOfEvent` is required.');
  });

  it('has a required rating', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` is required.');
  });

  it('has a rating 0 or above', () => {
    const event = new Event({
      rating: -1
    });
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` (-1) is less than minimum allowed value (0).');
  });

  it('has a rating 5 or below', () => {
    const event = new Event({
      rating: 6
    });
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` (6) is more than maximum allowed value (5).');
  });

  it('has a day get virtual', () => {
    const event = new Event({
      recipeId: 'cookies',
      dateOfEvent: new Date('2019-05-10T00:00:00'),
      notes: 'Best ever',
      rating: 5
    });

    expect(event.day).toEqual(10);
  });

  it('has a day set virtual', () => {
    const event = new Event({
      recipeId: 'cookies',
      dateOfEvent: new Date('2019-05-10T00:00:00'),
      notes: 'Best ever',
      rating: 5
    });

    event.day = 4;

    expect(event.day).toEqual(4);
  });

  it('has a month get virtual', () => {
    const event = new Event({
      recipeId: 'cookies',
      dateOfEvent: new Date('2019-05-10T00:00:00'),
      notes: 'Best ever',
      rating: 5
    });

    expect(event.month).toEqual(4);
  });

  it('has a month set virtual', () => {
    const event = new Event({
      recipeId: 'cookies',
      dateOfEvent: new Date('2019-05-10T00:00:00'),
      notes: 'Best ever',
      rating: 5
    });

    event.month = 7;
  
    expect(event.month).toEqual(8);
  });

  it('has a year get virtual', () => {
    const event = new Event({
      recipeId: 'cookies',
      dateOfEvent: new Date('2019-05-10T00:00:00'),
      notes: 'Best ever',
      rating: 5
    });

    expect(event.year).toEqual(2019);
  });

  it('has a year set virtual', () => {
    const event = new Event({
      recipeId: 'cookies',
      dateOfEvent: new Date('2019-05-10T00:00:00'),
      notes: 'Best ever',
      rating: 5
    });

    event.year = 2020;
  
    expect(event.year).toEqual(2020);
  });

});
