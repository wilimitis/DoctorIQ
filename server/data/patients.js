module.exports.patients = [
  {
    id: 0,
    name: 'Jon Snow',
    age: 22,
    email: 'winteriscoming@gmail.com',
    address: '123 Winterfell Lane, the North',
    phone: '5551234567'
  },
  {
    id: 1,
    name: 'Arya Stark',
    age: 15,
    email: 'agirlhasnoemail@gmail.com',
    address: '456 Braavos Ct',
    phone: '5558348254'
  }
];

module.exports.patientDetails = [
  {
    id: 0,
    name: 'Jon Snow',
    age: 22,
    email: 'winteriscoming@gmail.com',
    address: '123 Winterfell Lane, the North',
    phone: '5551234567',
    events: [
      {
        'title': 'All Day Event',
        'allDay': true,
        'start': new Date(2017, 7, 0),
        'end': new Date(2017, 7, 1)
      },
      {
        'title': 'Long Event',
        'start': new Date(2017, 7, 7),
        'end': new Date(2017, 7, 10)
      },

      {
        'title': 'DTS STARTS',
        'start': new Date(2017, 7, 13, 0, 0, 0),
        'end': new Date(2017, 7, 20, 0, 0, 0)
      },

      {
        'title': 'DTS ENDS',
        'start': new Date(2017, 7, 6, 0, 0, 0),
        'end': new Date(2017, 7, 13, 0, 0, 0)
      }
    ],
    attachments: [
      {
        name: 'report 1',
        path: 'dropbox/sdkfjn32'
      }
    ]
  },
  {
    id: 1,
    name: 'Arya Stark',
    age: 15,
    email: 'agirlhasnoemail@gmail.com',
    address: '456 Braavos Ct',
    phone: '5558348254',
    events: [
      {
        'title': 'Some Event',
        'start': new Date(2017, 7, 9, 0, 0, 0),
        'end': new Date(2017, 7, 9, 0, 0, 0)
      },
      {
        'title': 'Conference',
        'start': new Date(2017, 7, 11),
        'end': new Date(2017, 7, 13),
        desc: 'Big conference for important people'
      },
      {
        'title': 'Meeting',
        'start': new Date(2017, 7, 12, 10, 30, 0, 0),
        'end': new Date(2017, 7, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting'
      }
    ],
    attachments: [
      {
        name: 'report 1',
        path: 'dropbox/sdkfjn32'
      }
    ]
  }
];
