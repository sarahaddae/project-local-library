require('../chatbot.js');
require('../destinations.js')

describe('chatbot functions', () => {
  describe('findDestination', () => {
    it('returns the correct object for sample data', () => {
      let sample = [
        {location: "location 1", description: "location 1 description"},
        {location: "location 2", description: "location 2 description"}
      ]
      expect(findDestination('location 1', sample)).toEqual(sample[0]);
    })
    
    it('returns the correct object for "nikko"', () => {
      expect(findDestination('nikko', global.destinations)).toEqual(global.destinations[8]);
    })
    
    it('returns the correct object for "LAOS"', () => {
      expect(findDestination('LAOS', global.destinations)).toEqual(global.destinations[1]);
    })
  })
  
  describe('listDestinations', () => {
    it('returns the correct message for the sample data', () => {
      let sample = [
        {location: "location 1", description: "location 1 description"},
        {location: "location 2", description: "location 2 description"},
        {location: "location 3", description: "location 3 description"}
      ]
      expect(listDestinations(sample)).toEqual("I can tell you about our current recommended destinations. Which one do you want to hear about? location 1; location 2; location 3. Enter a location for more info.");
    })
    
    it('returns the correct message for the real data', () => {
      expect(listDestinations(global.destinations)).toEqual(`I can tell you about our current recommended destinations. Which one do you want to hear about? ${global.destinations.map(d=>d.location).join('; ')}. Enter a location for more info.`);
    })
  })
})