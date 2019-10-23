let teachers = [
  {
    name: 
      {
    first: Jim,
    last: Foster
    },
    instruments: [
      {
        name: guitar,
        minAge: 6,
        maxExp: 5,
        styles: ['classical', 'jazz', 'rock'],
        skills: ['songwriting', 'improvisation']
      },
      {
        name: 'piano',
        minAge: 4,
        maxExp: 5,
        styles: ['classical'],
        skills: ['songwriting']
      },
      {
        name: 'violin',
        minAge: 5,
        maxExp: 3,
        styles: ['folk', 'classical'],
        skills: []
      }
    ],
    genAvailability: [
      {
        date: '', //Moday October 28
        startTime: '', //3:00 PM
        endTime: '', //7:00 PM
        scheduledLessons: [{
          lessonTime: '', //3:30 PM
          lessonDuration: '', //30 minutes
          lessonAddress: 'xxxx Westlake Dr, Austin, TX 78746',
          departsAt: '', // 4:05 PM
          checkAvailability: function(customerAddress){
            //use customerAddress and this.lesson address to fetch travel time from google API.
            if(
              //traveltime + customer.lessonTime < Teacher.generalAvailability.endTime
              customerAddress //placeholder
            ) {
              //create availability object
              //Const availabilityObject = Object.Create('availability'),
            } else {
              return;
            }
          }
        }]
      }
    ]

  
},
]