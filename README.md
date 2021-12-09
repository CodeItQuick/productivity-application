# productivity-application

## Available at

https://elastic-carson-9a3b92.netlify.app/

## Goal

Help me learn angular forms setup

## Design

Time Block = new TimeSlot(10)
Time Block (one of these maps too the below)

1. slot -> is passed down its number, and knows its description, onChange it sends an update to TimeBlockService
2. slot -> is passed down its number, and knows its description, onChange it sends an update to TimeBlockService
3. slot -> is passed down its number, and knows its description, onChange it sends an update to TimeBlockService
4. slot -> is passed down its number, and knows its description, onChange it sends an update to TimeBlockService
5. slot -> is passed down its number, and knows its description, onChange it sends an update to TimeBlockService
6. slot -> is passed down its number, and knows its description, onChange it sends an update to TimeBlockService
7. slot -> is passed down its number, and knows its description, onChange it sends an update to TimeBlockService
8. slot -> is passed down its number, and knows its description, onChange it sends an update to TimeBlockService
9. slot -> is passed down its number, and knows its description, onChange it sends an update to TimeBlockService

TimeBlockService
Description: For each of the 9 timeslots, stores: [ values (it's description), index (the slot number), errors (errors if it is < 4 characters)]

TimeSlot.html -> TimeSlot.ts onUpdate -> TimeBlockService.ts -> TimeBlockComponent.ts -> TimeBlockComponent.html

## Change Log

8/12/2021: Organized the time-block-services so that it makes more sense
6/12/2021: Added time-block-services. The tests likely don't work, but now changes in a sub-component can be propagated to the parent (relatively simply)

## TODO:

1. Make the tests work again
2. Wrap tests around the existing components
3. Make a new page that uses subscribe/subject

NOTE: Saved in folder PersonalProjects/form-validation
