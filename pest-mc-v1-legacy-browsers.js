/******************* 
 * Pest-Mc-V1 Test *
 *******************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'pest-mc-v1';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const instr_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instr_loopLoopBegin, instr_loopLoopScheduler);
flowScheduler.add(instr_loopLoopScheduler);
flowScheduler.add(instr_loopLoopEnd);
const trials_emailsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_emailsLoopBegin, trials_emailsLoopScheduler);
flowScheduler.add(trials_emailsLoopScheduler);
flowScheduler.add(trials_emailsLoopEnd);
flowScheduler.add(score_trialRoutineBegin());
flowScheduler.add(score_trialRoutineEachFrame());
flowScheduler.add(score_trialRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(score_crtRoutineBegin());
flowScheduler.add(score_crtRoutineEachFrame());
flowScheduler.add(score_crtRoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin, trials_3LoopScheduler);
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin, trials_4LoopScheduler);
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);
const trials_5LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_5LoopBegin, trials_5LoopScheduler);
flowScheduler.add(trials_5LoopScheduler);
flowScheduler.add(trials_5LoopEnd);
const trials_6LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_6LoopBegin, trials_6LoopScheduler);
flowScheduler.add(trials_6LoopScheduler);
flowScheduler.add(trials_6LoopEnd);
flowScheduler.add(uclaRoutineBegin());
flowScheduler.add(uclaRoutineEachFrame());
flowScheduler.add(uclaRoutineEnd());
const trials_7LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_7LoopBegin, trials_7LoopScheduler);
flowScheduler.add(trials_7LoopScheduler);
flowScheduler.add(trials_7LoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'imgs/hard-scam.jpg', 'path': 'imgs/hard-scam.jpg'},
    {'name': 'emails_v1.xlsx', 'path': 'emails_v1.xlsx'},
    {'name': 'scam_suscep.xlsx', 'path': 'scam_suscep.xlsx'},
    {'name': 'demographics.xlsx', 'path': 'demographics.xlsx'},
    {'name': 'instructions.xlsx', 'path': 'instructions.xlsx'},
    {'name': 'health_scd.xlsx', 'path': 'health_scd.xlsx'},
    {'name': 'imgs/easy-scam.jpg', 'path': 'imgs/easy-scam.jpg'},
    {'name': 'instr_crt.xlsx', 'path': 'instr_crt.xlsx'},
    {'name': 'sni.xlsx', 'path': 'sni.xlsx'},
    {'name': 'crt.xlsx', 'path': 'crt.xlsx'},
    {'name': 'panas.xlsx', 'path': 'panas.xlsx'},
    {'name': 'imgs/task.jpg', 'path': 'imgs/task.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);

function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

function experimentInit() {
  // Initialize components for Routine "instr_trial"
  instr_trialClock = new util.Clock();
  instr_trial_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_trial_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  instr_trial_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instr_trial_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  instr_trial_to_cont = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_trial_to_cont',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_instr_trial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  num_trials = 40;
  inbox_text = "";
  
  compose = new visual.TextStim({
    win: psychoJS.window,
    name: 'compose',
    text: 'Compose',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.27), 0.39], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  inbox = new visual.TextStim({
    win: psychoJS.window,
    name: 'inbox',
    text: 'Inbox',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.27), 0.35], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  starred = new visual.TextStim({
    win: psychoJS.window,
    name: 'starred',
    text: 'Starred',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.27), 0.31], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  important = new visual.TextStim({
    win: psychoJS.window,
    name: 'important',
    text: 'Important',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.27), 0.27], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  sent = new visual.TextStim({
    win: psychoJS.window,
    name: 'sent',
    text: 'Sent',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.27), 0.23], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  drafts = new visual.TextStim({
    win: psychoJS.window,
    name: 'drafts',
    text: 'Drafts',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.27), 0.19], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  more = new visual.TextStim({
    win: psychoJS.window,
    name: 'more',
    text: 'More',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.27), 0.15], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  slider_trial = new visual.Slider({
    win: psychoJS.window, name: 'slider_trial',
    size: [1.2, 0.08], pos: [0, (- 0.4)], units: 'height',
    labels: ["Definitely Safe", "Possibly Safe", "Possibly Suspicious", "Definitely Suspicious"], ticks: [1, 2, 3, 4],
    granularity: 0.0, style: ["RADIO"],
    color: new util.Color('Black'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  key_resp_trial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  trial_to_cont = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_to_cont',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  email_box = new visual.Rect ({
    win: psychoJS.window, name: 'email_box', 
    width: [1.39, 0.7][0], height: [1.39, 0.7][1],
    ori: 0.0, pos: [0.07, 0.05],
    lineWidth: 2.0, lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0.0, depth: -11, interpolate: true,
  });
  
  subj_line = new visual.TextStim({
    win: psychoJS.window,
    name: 'subj_line',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.12), 0.42], height: 0.018,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -12.0 
  });
  
  sender_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'sender_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.11), 0.38], height: 0.018,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -13.0 
  });
  
  to_me = new visual.TextStim({
    win: psychoJS.window,
    name: 'to_me',
    text: 'to me',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.11), 0.36], height: 0.018,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -14.0 
  });
  
  email_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'email_body',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.11), 0.34], height: 0.018,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -15.0 
  });
  
  att_line = new visual.ShapeStim ({
    win: psychoJS.window, name: 'att_line', 
    vertices: [[-[1.2, 0][0]/2.0, 0], [+[1.2, 0][0]/2.0, 0]],
    ori: 0.0, pos: [0.065, (- 0.15)],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1.0, depth: -16, interpolate: true,
  });
  
  att_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'att_label',
    text: '1 Attachment',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.03), (- 0.17)], height: 0.018,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: 1.0,
    depth: -17.0 
  });
  
  att_box = new visual.Rect ({
    win: psychoJS.window, name: 'att_box', 
    width: [0.2, 0.1][0], height: [0.2, 0.1][1],
    ori: 0.0, pos: [(- 0.43), (- 0.24)],
    lineWidth: 1.3, lineColor: new util.Color('gray'),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -18, interpolate: true,
  });
  
  att_box_line = new visual.ShapeStim ({
    win: psychoJS.window, name: 'att_box_line', 
    vertices: [[-[0.2, 0][0]/2.0, 0], [+[0.2, 0][0]/2.0, 0]],
    ori: 0.0, pos: [(- 0.43), (- 0.26)],
    lineWidth: 1.0, lineColor: new util.Color('gray'),
    fillColor: new util.Color('gray'),
    opacity: 1.0, depth: -19, interpolate: true,
  });
  
  att_box_inner = new visual.Rect ({
    win: psychoJS.window, name: 'att_box_inner', 
    width: [0.04, 0.025][0], height: [0.04, 0.025][1],
    ori: 0.0, pos: [(- 0.507), (- 0.275)],
    lineWidth: 1.0, lineColor: new util.Color('red'),
    fillColor: new util.Color('red'),
    opacity: 1.0, depth: -20, interpolate: true,
  });
  
  att_box_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'att_box_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.02, (- 0.274)], height: 0.016,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -21.0 
  });
  
  att_box_pdf = new visual.TextStim({
    win: psychoJS.window,
    name: 'att_box_pdf',
    text: 'PDF',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.022), (- 0.275)], height: 0.016,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -22.0 
  });
  
  // Initialize components for Routine "score_trial"
  score_trialClock = new util.Clock();
  score_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'score_text',
    text: 'Finished! Please wait…',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "instr_surveys"
  instr_surveysClock = new util.Clock();
  survey_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'survey_instr',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  survey_instr_to_cont = new visual.TextStim({
    win: psychoJS.window,
    name: 'survey_instr_to_cont',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  survey_instr_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "crt"
  crtClock = new util.Clock();
  text_crt = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_crt',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  textbox_crt = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_crt',
    text: '',
    font: 'Open Sans',
    pos: [0, (- 0.1)], letterHeight: 0.05,
    size: [0.5, 0.1],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    bold: false, italic: false,
    opacity: undefined,
    padding: undefined,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  to_cont_crt = new visual.TextStim({
    win: psychoJS.window,
    name: 'to_cont_crt',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_crt = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "score_crt"
  score_crtClock = new util.Clock();
  score_text_crt = new visual.TextStim({
    win: psychoJS.window,
    name: 'score_text_crt',
    text: 'Your Score: ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "panas"
  panasClock = new util.Clock();
  text_panas = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_panas',
    text: 'This scale consists of a number of words that describe different feelings and emotions. Read each item and then mark the appropriate answer in the space next to that word. Indicate to what extent you generally feel this way, that is, how you feel on average.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  box_panas = new visual.Rect ({
    win: psychoJS.window, name: 'box_panas', 
    width: [0.4, 0.1][0], height: [0.4, 0.1][1],
    ori: 0.0, pos: [0, 0.1],
    lineWidth: 2.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  feeling_panas = new visual.TextStim({
    win: psychoJS.window,
    name: 'feeling_panas',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  space_panas = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_panas',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  slider_panas = new visual.Slider({
    win: psychoJS.window, name: 'slider_panas',
    size: [1, 0.1], pos: [0, (- 0.1)], units: 'height',
    labels: ["Very slightly/\nNot at all", "A little", "Moderately", "Quite a bit", "Extremely"], ticks: [1, 2, 3, 4, 5],
    granularity: 0.0, style: ["RADIO"],
    color: new util.Color('Black'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  key_resp_panas = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "health_scd"
  health_scdClock = new util.Clock();
  text_health_scd = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_health_scd',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  to_cont_health_scd = new visual.TextStim({
    win: psychoJS.window,
    name: 'to_cont_health_scd',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  to_cont_2_health_scd = new visual.TextStim({
    win: psychoJS.window,
    name: 'to_cont_2_health_scd',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  slider_health_scd = new visual.Slider({
    win: psychoJS.window, name: 'slider_health_scd',
    size: [1, 0.1], pos: [0, (- 0.1)], units: 'height',
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 0.0, style: ["RADIO"],
    color: new util.Color('Black'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  slider_2_health_scd = new visual.Slider({
    win: psychoJS.window, name: 'slider_2_health_scd',
    size: [0.3, 0.1], pos: [0, (- 0.1)], units: 'height',
    labels: ["Yes", "No"], ticks: [1, 2],
    granularity: 0.0, style: ["RADIO"],
    color: new util.Color('Black'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  key_resp_health_scd = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_2_health_scd = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "scam_susceptibility"
  scam_susceptibilityClock = new util.Clock();
  text_scam_suscep = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_scam_suscep',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_scam_suscep = new visual.Slider({
    win: psychoJS.window, name: 'slider_scam_suscep',
    size: [0.3, 0.1], pos: [0, (- 0.1)], units: 'height',
    labels: ["Yes", "No"], ticks: [1, 2],
    granularity: 0.0, style: ["RADIO"],
    color: new util.Color('Black'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  to_cont_scam_suscep = new visual.TextStim({
    win: psychoJS.window,
    name: 'to_cont_scam_suscep',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  textbox_scam_suscep = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_scam_suscep',
    text: '',
    font: 'Open Sans',
    pos: [0, (- 0.1)], letterHeight: 0.05,
    size: [0.5, 0.1],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    bold: false, italic: false,
    opacity: undefined,
    padding: undefined,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  key_resp_scam_suscep = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  to_cont_2_scam_suscep = new visual.TextStim({
    win: psychoJS.window,
    name: 'to_cont_2_scam_suscep',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  key_resp_2_scam_suscep = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "demographics"
  demographicsClock = new util.Clock();
  text_demo = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_demo',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  to_cont_demo_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'to_cont_demo_0',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  to_cont_demo = new visual.TextStim({
    win: psychoJS.window,
    name: 'to_cont_demo',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  to_cont_2_demo = new visual.TextStim({
    win: psychoJS.window,
    name: 'to_cont_2_demo',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  to_cont_textbox_demo = new visual.TextStim({
    win: psychoJS.window,
    name: 'to_cont_textbox_demo',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  slider_2_demo = new visual.Slider({
    win: psychoJS.window, name: 'slider_2_demo',
    size: [1, 0.08], pos: [0, (- 0.1)], units: 'height',
    labels: ["0", "1-\n9k", "10-\n24k", "25-\n49k", "50-\n99k", "100-\n149k", "150-\n199k", "200-\n249k", "250-\n299k", "300-\n399k", "400-\n499k", "500k+"], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    granularity: 0.0, style: ["RADIO"],
    color: new util.Color('Black'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  key_resp_demo = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_2_demo = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_0_demo = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_demo_textbox = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  textbox_demo = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_demo',
    text: '',
    font: 'Open Sans',
    pos: [0, (- 0.1)], letterHeight: 0.05,
    size: [0.5, 0.1],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    bold: false, italic: false,
    opacity: undefined,
    padding: undefined,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -10.0 
  });
  
  demo_resp_0 = new visual.Slider({
    win: psychoJS.window, name: 'demo_resp_0',
    size: [0.8, 0.08], pos: [0, (- 0.1)], units: 'height',
    labels: ["Male", "Female", "Other"], ticks: [1, 2, 3],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('Black'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -11, 
    flip: false,
  });
  
  demo_resp_1 = new visual.Slider({
    win: psychoJS.window, name: 'demo_resp_1',
    size: [0.2, 0.08], pos: [(- 0.4), (- 0.1)], units: 'height',
    labels: ["Alone", "With\nspouse"], ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('Black'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -12, 
    flip: false,
  });
  
  demo_resp_2 = new visual.Slider({
    win: psychoJS.window, name: 'demo_resp_2',
    size: [0.2, 0.08], pos: [0, (- 0.1)], units: 'height',
    labels: ["With\nchild(ren)", "Assisted\nLiving"], ticks: [3, 4],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('Black'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -13, 
    flip: false,
  });
  
  demo_resp_3 = new visual.Slider({
    win: psychoJS.window, name: 'demo_resp_3',
    size: [0.2, 0.08], pos: [0.4, (- 0.1)], units: 'height',
    labels: ["Other", "Prefer Not\nto Answer"], ticks: [5, 6],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('Black'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -14, 
    flip: false,
  });
  
  // Initialize components for Routine "ucla"
  uclaClock = new util.Clock();
  text_ucla = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_ucla',
    text: 'How often do you feel alone?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  to_cont_ucla = new visual.TextStim({
    win: psychoJS.window,
    name: 'to_cont_ucla',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  slider_ucla = new visual.Slider({
    win: psychoJS.window, name: 'slider_ucla',
    size: [1, 0.1], pos: [0, (- 0.1)], units: 'height',
    labels: ["Never", "Rarely", "Sometimes", "Always"], ticks: [1, 2, 3, 4],
    granularity: 0.0, style: ["RADIO"],
    color: new util.Color('Black'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  key_resp_ucla = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sni"
  sniClock = new util.Clock();
  text_sni = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_sni',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  to_cont_sni = new visual.TextStim({
    win: psychoJS.window,
    name: 'to_cont_sni',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  slider_sni = new visual.Slider({
    win: psychoJS.window, name: 'slider_sni',
    size: [1, 0.1], pos: [0, (- 0.1)], units: 'height',
    labels: ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven+", "Prefer\nnot to\nanswer"], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 0.0, style: ["RADIO"],
    color: new util.Color('Black'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  key_resp_sni = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Thanks!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function instr_loopLoopBegin(instr_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  instr_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'instructions.xlsx',
    seed: undefined, name: 'instr_loop'
  });
  psychoJS.experiment.addLoop(instr_loop); // add the loop to the experiment
  currentLoop = instr_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  instr_loop.forEach(function() {
    const snapshot = instr_loop.getSnapshot();

    instr_loopLoopScheduler.add(importConditions(snapshot));
    instr_loopLoopScheduler.add(instr_trialRoutineBegin(snapshot));
    instr_loopLoopScheduler.add(instr_trialRoutineEachFrame(snapshot));
    instr_loopLoopScheduler.add(instr_trialRoutineEnd(snapshot));
    instr_loopLoopScheduler.add(endLoopIteration(instr_loopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}

function instr_loopLoopEnd() {
  psychoJS.experiment.removeLoop(instr_loop);

  return Scheduler.Event.NEXT;
}

function trials_emailsLoopBegin(trials_emailsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_emails = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'emails_v1.xlsx',
    seed: undefined, name: 'trials_emails'
  });
  psychoJS.experiment.addLoop(trials_emails); // add the loop to the experiment
  currentLoop = trials_emails;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_emails.forEach(function() {
    const snapshot = trials_emails.getSnapshot();

    trials_emailsLoopScheduler.add(importConditions(snapshot));
    trials_emailsLoopScheduler.add(trialRoutineBegin(snapshot));
    trials_emailsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    trials_emailsLoopScheduler.add(trialRoutineEnd(snapshot));
    trials_emailsLoopScheduler.add(endLoopIteration(trials_emailsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}

function trials_emailsLoopEnd() {
  psychoJS.experiment.removeLoop(trials_emails);

  return Scheduler.Event.NEXT;
}

function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'instr_crt.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(instr_surveysRoutineBegin(snapshot));
    trialsLoopScheduler.add(instr_surveysRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(instr_surveysRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}

function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

function trials_2LoopBegin(trials_2LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'crt.xlsx',
    seed: undefined, name: 'trials_2'
  });
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
  currentLoop = trials_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_2.forEach(function() {
    const snapshot = trials_2.getSnapshot();

    trials_2LoopScheduler.add(importConditions(snapshot));
    trials_2LoopScheduler.add(crtRoutineBegin(snapshot));
    trials_2LoopScheduler.add(crtRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(crtRoutineEnd(snapshot));
    trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}

function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}

function trials_3LoopBegin(trials_3LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_3 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'panas.xlsx',
    seed: undefined, name: 'trials_3'
  });
  psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
  currentLoop = trials_3;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_3.forEach(function() {
    const snapshot = trials_3.getSnapshot();

    trials_3LoopScheduler.add(importConditions(snapshot));
    trials_3LoopScheduler.add(panasRoutineBegin(snapshot));
    trials_3LoopScheduler.add(panasRoutineEachFrame(snapshot));
    trials_3LoopScheduler.add(panasRoutineEnd(snapshot));
    trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}

function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}

function trials_4LoopBegin(trials_4LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_4 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'health_scd.xlsx',
    seed: undefined, name: 'trials_4'
  });
  psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
  currentLoop = trials_4;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_4.forEach(function() {
    const snapshot = trials_4.getSnapshot();

    trials_4LoopScheduler.add(importConditions(snapshot));
    trials_4LoopScheduler.add(health_scdRoutineBegin(snapshot));
    trials_4LoopScheduler.add(health_scdRoutineEachFrame(snapshot));
    trials_4LoopScheduler.add(health_scdRoutineEnd(snapshot));
    trials_4LoopScheduler.add(endLoopIteration(trials_4LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}

function trials_4LoopEnd() {
  psychoJS.experiment.removeLoop(trials_4);

  return Scheduler.Event.NEXT;
}

function trials_5LoopBegin(trials_5LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_5 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'scam_suscep.xlsx',
    seed: undefined, name: 'trials_5'
  });
  psychoJS.experiment.addLoop(trials_5); // add the loop to the experiment
  currentLoop = trials_5;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_5.forEach(function() {
    const snapshot = trials_5.getSnapshot();

    trials_5LoopScheduler.add(importConditions(snapshot));
    trials_5LoopScheduler.add(scam_susceptibilityRoutineBegin(snapshot));
    trials_5LoopScheduler.add(scam_susceptibilityRoutineEachFrame(snapshot));
    trials_5LoopScheduler.add(scam_susceptibilityRoutineEnd(snapshot));
    trials_5LoopScheduler.add(endLoopIteration(trials_5LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}

function trials_5LoopEnd() {
  psychoJS.experiment.removeLoop(trials_5);

  return Scheduler.Event.NEXT;
}

function trials_6LoopBegin(trials_6LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_6 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'demographics.xlsx',
    seed: undefined, name: 'trials_6'
  });
  psychoJS.experiment.addLoop(trials_6); // add the loop to the experiment
  currentLoop = trials_6;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_6.forEach(function() {
    const snapshot = trials_6.getSnapshot();

    trials_6LoopScheduler.add(importConditions(snapshot));
    trials_6LoopScheduler.add(demographicsRoutineBegin(snapshot));
    trials_6LoopScheduler.add(demographicsRoutineEachFrame(snapshot));
    trials_6LoopScheduler.add(demographicsRoutineEnd(snapshot));
    trials_6LoopScheduler.add(endLoopIteration(trials_6LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}

function trials_6LoopEnd() {
  psychoJS.experiment.removeLoop(trials_6);

  return Scheduler.Event.NEXT;
}

function trials_7LoopBegin(trials_7LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_7 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'sni.xlsx',
    seed: undefined, name: 'trials_7'
  });
  psychoJS.experiment.addLoop(trials_7); // add the loop to the experiment
  currentLoop = trials_7;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_7.forEach(function() {
    const snapshot = trials_7.getSnapshot();

    trials_7LoopScheduler.add(importConditions(snapshot));
    trials_7LoopScheduler.add(sniRoutineBegin(snapshot));
    trials_7LoopScheduler.add(sniRoutineEachFrame(snapshot));
    trials_7LoopScheduler.add(sniRoutineEnd(snapshot));
    trials_7LoopScheduler.add(endLoopIteration(trials_7LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}

function trials_7LoopEnd() {
  psychoJS.experiment.removeLoop(trials_7);

  return Scheduler.Event.NEXT;
}

function instr_trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_trial'-------
    t = 0;
    instr_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    win.setColor("black");
    
    instr_trial_text.setText(instr_text);
    instr_trial_image.setImage(img_source);
    instr_trial_to_cont.setColor(new util.Color(text_color));
    key_resp_instr_trial.keys = undefined;
    key_resp_instr_trial.rt = undefined;
    _key_resp_instr_trial_allKeys = [];
    // keep track of which components have finished
    instr_trialComponents = [];
    instr_trialComponents.push(instr_trial_text);
    instr_trialComponents.push(instr_trial_image);
    instr_trialComponents.push(instr_trial_to_cont);
    instr_trialComponents.push(key_resp_instr_trial);
    
    instr_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function instr_trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_trial'-------
    // get current time
    t = instr_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_trial_text* updates
    if (t >= 0.0 && instr_trial_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_trial_text.tStart = t;  // (not accounting for frame time here)
      instr_trial_text.frameNStart = frameN;  // exact frame index
      
      instr_trial_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instr_trial_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instr_trial_text.setAutoDraw(false);
    }
    
    // *instr_trial_image* updates
    if ((instr_text == 'get_image') && instr_trial_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_trial_image.tStart = t;  // (not accounting for frame time here)
      instr_trial_image.frameNStart = frameN;  // exact frame index
      
      instr_trial_image.setAutoDraw(true);
    }

    if (instr_trial_image.status === PsychoJS.Status.STARTED && t >= (instr_trial_image.tStart + 999999.0)) {
      instr_trial_image.setAutoDraw(false);
    }
    
    // *instr_trial_to_cont* updates
    if (t >= 2.0 && instr_trial_to_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_trial_to_cont.tStart = t;  // (not accounting for frame time here)
      instr_trial_to_cont.frameNStart = frameN;  // exact frame index
      
      instr_trial_to_cont.setAutoDraw(true);
    }

    frameRemains = 2.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instr_trial_to_cont.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instr_trial_to_cont.setAutoDraw(false);
    }
    
    // *key_resp_instr_trial* updates
    if (t >= 2.0 && key_resp_instr_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instr_trial.tStart = t;  // (not accounting for frame time here)
      key_resp_instr_trial.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instr_trial.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr_trial.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr_trial.clearEvents(); });
    }

    frameRemains = 2.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_instr_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_instr_trial.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_instr_trial.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instr_trial.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instr_trial_allKeys = _key_resp_instr_trial_allKeys.concat(theseKeys);
      if (_key_resp_instr_trial_allKeys.length > 0) {
        key_resp_instr_trial.keys = _key_resp_instr_trial_allKeys[_key_resp_instr_trial_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instr_trial.rt = _key_resp_instr_trial_allKeys[_key_resp_instr_trial_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instr_trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_trial'-------
    instr_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_instr_trial.stop();
    // the Routine "instr_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    compose.alignText = "left";
    inbox.alignText = "left";
    starred.alignText = "left";
    important.alignText = "left";
    sent.alignText = "left";
    drafts.alignText = "left";
    more.alignText = "left";
    subj_line.alignText = "left";
    sender_text.alignText = "left";
    to_me.alignText = "left";
    email_body.alignText = "left";
    email_body.anchorVert = "top";
    att_label.alignText = "left";
    att_box_text.alignText = "left";
    att_box_pdf.alignText = "left";
    win.setColor("white");
    num_trials -= 1;
    inbox_text = (("Inbox(" + num_trials.toString()) + ")");
    
    slider_trial.reset()
    key_resp_trial.keys = undefined;
    key_resp_trial.rt = undefined;
    _key_resp_trial_allKeys = [];
    subj_line.setText(subject_line);
    sender_text.setText(sender);
    email_body.setText(body);
    att_box_text.setText(att_name);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(compose);
    trialComponents.push(inbox);
    trialComponents.push(starred);
    trialComponents.push(important);
    trialComponents.push(sent);
    trialComponents.push(drafts);
    trialComponents.push(more);
    trialComponents.push(slider_trial);
    trialComponents.push(key_resp_trial);
    trialComponents.push(trial_to_cont);
    trialComponents.push(email_box);
    trialComponents.push(subj_line);
    trialComponents.push(sender_text);
    trialComponents.push(to_me);
    trialComponents.push(email_body);
    trialComponents.push(att_line);
    trialComponents.push(att_label);
    trialComponents.push(att_box);
    trialComponents.push(att_box_line);
    trialComponents.push(att_box_inner);
    trialComponents.push(att_box_text);
    trialComponents.push(att_box_pdf);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *compose* updates
    if (t >= 0.0 && compose.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      compose.tStart = t;  // (not accounting for frame time here)
      compose.frameNStart = frameN;  // exact frame index
      
      compose.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (compose.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      compose.setAutoDraw(false);
    }
    
    // *inbox* updates
    if (t >= 0.0 && inbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inbox.tStart = t;  // (not accounting for frame time here)
      inbox.frameNStart = frameN;  // exact frame index
      
      inbox.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (inbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      inbox.setAutoDraw(false);
    }
    
    // *starred* updates
    if (t >= 0.0 && starred.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      starred.tStart = t;  // (not accounting for frame time here)
      starred.frameNStart = frameN;  // exact frame index
      
      starred.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (starred.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      starred.setAutoDraw(false);
    }
    
    // *important* updates
    if (t >= 0.0 && important.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      important.tStart = t;  // (not accounting for frame time here)
      important.frameNStart = frameN;  // exact frame index
      
      important.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (important.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      important.setAutoDraw(false);
    }
    
    // *sent* updates
    if (t >= 0.0 && sent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sent.tStart = t;  // (not accounting for frame time here)
      sent.frameNStart = frameN;  // exact frame index
      
      sent.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sent.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      sent.setAutoDraw(false);
    }
    
    // *drafts* updates
    if (t >= 0.0 && drafts.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drafts.tStart = t;  // (not accounting for frame time here)
      drafts.frameNStart = frameN;  // exact frame index
      
      drafts.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (drafts.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      drafts.setAutoDraw(false);
    }
    
    // *more* updates
    if (t >= 0.0 && more.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      more.tStart = t;  // (not accounting for frame time here)
      more.frameNStart = frameN;  // exact frame index
      
      more.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (more.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      more.setAutoDraw(false);
    }
    
    // *slider_trial* updates
    if (t >= 0.0 && slider_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_trial.tStart = t;  // (not accounting for frame time here)
      slider_trial.frameNStart = frameN;  // exact frame index
      
      slider_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (slider_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      slider_trial.setAutoDraw(false);
    }
    
    // *key_resp_trial* updates
    if ((slider_trial.getRating() != None) && key_resp_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_trial.tStart = t;  // (not accounting for frame time here)
      key_resp_trial.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_trial.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_trial.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_trial.clearEvents(); });
    }

    if (key_resp_trial.status === PsychoJS.Status.STARTED && t >= (key_resp_trial.tStart + 999999.0)) {
      key_resp_trial.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_trial.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_trial.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_trial_allKeys = _key_resp_trial_allKeys.concat(theseKeys);
      if (_key_resp_trial_allKeys.length > 0) {
        key_resp_trial.keys = _key_resp_trial_allKeys[_key_resp_trial_allKeys.length - 1].name;  // just the last key pressed
        key_resp_trial.rt = _key_resp_trial_allKeys[_key_resp_trial_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *trial_to_cont* updates
    if ((slider_trial.getRating() != None) && trial_to_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_to_cont.tStart = t;  // (not accounting for frame time here)
      trial_to_cont.frameNStart = frameN;  // exact frame index
      
      trial_to_cont.setAutoDraw(true);
    }

    if (trial_to_cont.status === PsychoJS.Status.STARTED && t >= (trial_to_cont.tStart + 999999.0)) {
      trial_to_cont.setAutoDraw(false);
    }
    
    // *email_box* updates
    if (t >= 0.0 && email_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      email_box.tStart = t;  // (not accounting for frame time here)
      email_box.frameNStart = frameN;  // exact frame index
      
      email_box.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (email_box.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      email_box.setAutoDraw(false);
    }
    
    // *subj_line* updates
    if (t >= 0.0 && subj_line.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      subj_line.tStart = t;  // (not accounting for frame time here)
      subj_line.frameNStart = frameN;  // exact frame index
      
      subj_line.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (subj_line.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      subj_line.setAutoDraw(false);
    }
    
    // *sender_text* updates
    if (t >= 0.0 && sender_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sender_text.tStart = t;  // (not accounting for frame time here)
      sender_text.frameNStart = frameN;  // exact frame index
      
      sender_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sender_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      sender_text.setAutoDraw(false);
    }
    
    // *to_me* updates
    if (t >= 0.0 && to_me.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_me.tStart = t;  // (not accounting for frame time here)
      to_me.frameNStart = frameN;  // exact frame index
      
      to_me.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (to_me.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      to_me.setAutoDraw(false);
    }
    
    // *email_body* updates
    if (t >= 0.0 && email_body.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      email_body.tStart = t;  // (not accounting for frame time here)
      email_body.frameNStart = frameN;  // exact frame index
      
      email_body.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (email_body.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      email_body.setAutoDraw(false);
    }
    
    // *att_line* updates
    if ((version == 'attach') && att_line.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      att_line.tStart = t;  // (not accounting for frame time here)
      att_line.frameNStart = frameN;  // exact frame index
      
      att_line.setAutoDraw(true);
    }

    if (att_line.status === PsychoJS.Status.STARTED && t >= (att_line.tStart + 999999.0)) {
      att_line.setAutoDraw(false);
    }
    
    // *att_label* updates
    if ((version == 'attach') && att_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      att_label.tStart = t;  // (not accounting for frame time here)
      att_label.frameNStart = frameN;  // exact frame index
      
      att_label.setAutoDraw(true);
    }

    if (att_label.status === PsychoJS.Status.STARTED && t >= (att_label.tStart + 999999.0)) {
      att_label.setAutoDraw(false);
    }
    
    // *att_box* updates
    if ((version == 'attach') && att_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      att_box.tStart = t;  // (not accounting for frame time here)
      att_box.frameNStart = frameN;  // exact frame index
      
      att_box.setAutoDraw(true);
    }

    if (att_box.status === PsychoJS.Status.STARTED && t >= (att_box.tStart + 999999.0)) {
      att_box.setAutoDraw(false);
    }
    
    // *att_box_line* updates
    if ((version == 'attach') && att_box_line.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      att_box_line.tStart = t;  // (not accounting for frame time here)
      att_box_line.frameNStart = frameN;  // exact frame index
      
      att_box_line.setAutoDraw(true);
    }

    if (att_box_line.status === PsychoJS.Status.STARTED && t >= (att_box_line.tStart + 999999.0)) {
      att_box_line.setAutoDraw(false);
    }
    
    // *att_box_inner* updates
    if ((version == 'attach') && att_box_inner.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      att_box_inner.tStart = t;  // (not accounting for frame time here)
      att_box_inner.frameNStart = frameN;  // exact frame index
      
      att_box_inner.setAutoDraw(true);
    }

    if (att_box_inner.status === PsychoJS.Status.STARTED && t >= (att_box_inner.tStart + 999999.0)) {
      att_box_inner.setAutoDraw(false);
    }
    
    // *att_box_text* updates
    if ((version == 'attach') && att_box_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      att_box_text.tStart = t;  // (not accounting for frame time here)
      att_box_text.frameNStart = frameN;  // exact frame index
      
      att_box_text.setAutoDraw(true);
    }

    if (att_box_text.status === PsychoJS.Status.STARTED && t >= (att_box_text.tStart + 999999.0)) {
      att_box_text.setAutoDraw(false);
    }
    
    // *att_box_pdf* updates
    if ((version == 'attach') && att_box_pdf.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      att_box_pdf.tStart = t;  // (not accounting for frame time here)
      att_box_pdf.frameNStart = frameN;  // exact frame index
      
      att_box_pdf.setAutoDraw(true);
    }

    if (att_box_pdf.status === PsychoJS.Status.STARTED && t >= (att_box_pdf.tStart + 999999.0)) {
      att_box_pdf.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    core.wait(1);
    
    psychoJS.experiment.addData('slider_trial.response', slider_trial.getRating());
    psychoJS.experiment.addData('slider_trial.rt', slider_trial.getRT());
    key_resp_trial.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function score_trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'score_trial'-------
    t = 0;
    score_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    win.setColor("black");
    
    // keep track of which components have finished
    score_trialComponents = [];
    score_trialComponents.push(score_text);
    
    score_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function score_trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'score_trial'-------
    // get current time
    t = score_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *score_text* updates
    if (t >= 0.0 && score_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      score_text.tStart = t;  // (not accounting for frame time here)
      score_text.frameNStart = frameN;  // exact frame index
      
      score_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (score_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      score_text.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    score_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function score_trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'score_trial'-------
    score_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}

function instr_surveysRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_surveys'-------
    t = 0;
    instr_surveysClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1000001.000000);
    // update component parameters for each repeat
    survey_instr.setText(instr);
    survey_instr.setHeight(font_size);
    survey_instr_key_resp.keys = undefined;
    survey_instr_key_resp.rt = undefined;
    _survey_instr_key_resp_allKeys = [];
    // keep track of which components have finished
    instr_surveysComponents = [];
    instr_surveysComponents.push(survey_instr);
    instr_surveysComponents.push(survey_instr_to_cont);
    instr_surveysComponents.push(survey_instr_key_resp);
    
    instr_surveysComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function instr_surveysRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_surveys'-------
    // get current time
    t = instr_surveysClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *survey_instr* updates
    if (t >= 0.0 && survey_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      survey_instr.tStart = t;  // (not accounting for frame time here)
      survey_instr.frameNStart = frameN;  // exact frame index
      
      survey_instr.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (survey_instr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      survey_instr.setAutoDraw(false);
    }
    
    // *survey_instr_to_cont* updates
    if (t >= 2.0 && survey_instr_to_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      survey_instr_to_cont.tStart = t;  // (not accounting for frame time here)
      survey_instr_to_cont.frameNStart = frameN;  // exact frame index
      
      survey_instr_to_cont.setAutoDraw(true);
    }

    frameRemains = 2.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (survey_instr_to_cont.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      survey_instr_to_cont.setAutoDraw(false);
    }
    
    // *survey_instr_key_resp* updates
    if (t >= 2.0 && survey_instr_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      survey_instr_key_resp.tStart = t;  // (not accounting for frame time here)
      survey_instr_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { survey_instr_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { survey_instr_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { survey_instr_key_resp.clearEvents(); });
    }

    frameRemains = 2.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (survey_instr_key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      survey_instr_key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (survey_instr_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = survey_instr_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _survey_instr_key_resp_allKeys = _survey_instr_key_resp_allKeys.concat(theseKeys);
      if (_survey_instr_key_resp_allKeys.length > 0) {
        survey_instr_key_resp.keys = _survey_instr_key_resp_allKeys[_survey_instr_key_resp_allKeys.length - 1].name;  // just the last key pressed
        survey_instr_key_resp.rt = _survey_instr_key_resp_allKeys[_survey_instr_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_surveysComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instr_surveysRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_surveys'-------
    instr_surveysComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    survey_instr_key_resp.stop();
    return Scheduler.Event.NEXT;
  };
}

function crtRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'crt'-------
    t = 0;
    crtClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    win.setColor("white");
    textbox_crt.setText("");
    
    text_crt.setText(question);
    key_resp_crt.keys = undefined;
    key_resp_crt.rt = undefined;
    _key_resp_crt_allKeys = [];
    // keep track of which components have finished
    crtComponents = [];
    crtComponents.push(text_crt);
    crtComponents.push(textbox_crt);
    crtComponents.push(to_cont_crt);
    crtComponents.push(key_resp_crt);
    
    crtComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function crtRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'crt'-------
    // get current time
    t = crtClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_crt* updates
    if (t >= 0.0 && text_crt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_crt.tStart = t;  // (not accounting for frame time here)
      text_crt.frameNStart = frameN;  // exact frame index
      
      text_crt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_crt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_crt.setAutoDraw(false);
    }
    
    // *textbox_crt* updates
    if (t >= 0.0 && textbox_crt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_crt.tStart = t;  // (not accounting for frame time here)
      textbox_crt.frameNStart = frameN;  // exact frame index
      
      textbox_crt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textbox_crt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textbox_crt.setAutoDraw(false);
    }
    
    // *to_cont_crt* updates
    if ((textbox_crt.getText() != '') && to_cont_crt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_cont_crt.tStart = t;  // (not accounting for frame time here)
      to_cont_crt.frameNStart = frameN;  // exact frame index
      
      to_cont_crt.setAutoDraw(true);
    }

    if (to_cont_crt.status === PsychoJS.Status.STARTED && t >= (to_cont_crt.tStart + 999999.0)) {
      to_cont_crt.setAutoDraw(false);
    }
    
    // *key_resp_crt* updates
    if ((textbox_crt.getText() != '') && key_resp_crt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_crt.tStart = t;  // (not accounting for frame time here)
      key_resp_crt.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_crt.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_crt.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_crt.clearEvents(); });
    }

    if (key_resp_crt.status === PsychoJS.Status.STARTED && t >= (key_resp_crt.tStart + 999999.0)) {
      key_resp_crt.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_crt.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_crt.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_crt_allKeys = _key_resp_crt_allKeys.concat(theseKeys);
      if (_key_resp_crt_allKeys.length > 0) {
        key_resp_crt.keys = _key_resp_crt_allKeys[_key_resp_crt_allKeys.length - 1].name;  // just the last key pressed
        key_resp_crt.rt = _key_resp_crt_allKeys[_key_resp_crt_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    crtComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function crtRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'crt'-------
    crtComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('textbox_crt.text',textbox_crt.text)
    textbox_crt.reset()
    key_resp_crt.stop();
    // the Routine "crt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function score_crtRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'score_crt'-------
    t = 0;
    score_crtClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    win.setColor("black");
    
    // keep track of which components have finished
    score_crtComponents = [];
    score_crtComponents.push(score_text_crt);
    
    score_crtComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function score_crtRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'score_crt'-------
    // get current time
    t = score_crtClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *score_text_crt* updates
    if (t >= 0.0 && score_text_crt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      score_text_crt.tStart = t;  // (not accounting for frame time here)
      score_text_crt.frameNStart = frameN;  // exact frame index
      
      score_text_crt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (score_text_crt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      score_text_crt.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    score_crtComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function score_crtRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'score_crt'-------
    score_crtComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}

function panasRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'panas'-------
    t = 0;
    panasClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    feeling_panas.setText(panas);
    slider_panas.reset()
    key_resp_panas.keys = undefined;
    key_resp_panas.rt = undefined;
    _key_resp_panas_allKeys = [];
    win.setColor("white");
    text_panas.alignText = "left";
    
    // keep track of which components have finished
    panasComponents = [];
    panasComponents.push(text_panas);
    panasComponents.push(box_panas);
    panasComponents.push(feeling_panas);
    panasComponents.push(space_panas);
    panasComponents.push(slider_panas);
    panasComponents.push(key_resp_panas);
    
    panasComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function panasRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'panas'-------
    // get current time
    t = panasClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_panas* updates
    if (t >= 0.0 && text_panas.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_panas.tStart = t;  // (not accounting for frame time here)
      text_panas.frameNStart = frameN;  // exact frame index
      
      text_panas.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_panas.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_panas.setAutoDraw(false);
    }
    
    // *box_panas* updates
    if (t >= 0.0 && box_panas.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_panas.tStart = t;  // (not accounting for frame time here)
      box_panas.frameNStart = frameN;  // exact frame index
      
      box_panas.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (box_panas.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      box_panas.setAutoDraw(false);
    }
    
    // *feeling_panas* updates
    if (t >= 0.0 && feeling_panas.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feeling_panas.tStart = t;  // (not accounting for frame time here)
      feeling_panas.frameNStart = frameN;  // exact frame index
      
      feeling_panas.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feeling_panas.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feeling_panas.setAutoDraw(false);
    }
    
    // *space_panas* updates
    if ((slider_panas.getRating() != None) && space_panas.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_panas.tStart = t;  // (not accounting for frame time here)
      space_panas.frameNStart = frameN;  // exact frame index
      
      space_panas.setAutoDraw(true);
    }

    if (space_panas.status === PsychoJS.Status.STARTED && t >= (space_panas.tStart + 999999.0)) {
      space_panas.setAutoDraw(false);
    }
    
    // *slider_panas* updates
    if (t >= 0.0 && slider_panas.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_panas.tStart = t;  // (not accounting for frame time here)
      slider_panas.frameNStart = frameN;  // exact frame index
      
      slider_panas.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (slider_panas.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      slider_panas.setAutoDraw(false);
    }
    
    // *key_resp_panas* updates
    if ((slider_panas.getRating() != None) && key_resp_panas.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_panas.tStart = t;  // (not accounting for frame time here)
      key_resp_panas.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_panas.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_panas.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_panas.clearEvents(); });
    }

    if (key_resp_panas.status === PsychoJS.Status.STARTED && t >= (key_resp_panas.tStart + 999999.0)) {
      key_resp_panas.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_panas.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_panas.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_panas_allKeys = _key_resp_panas_allKeys.concat(theseKeys);
      if (_key_resp_panas_allKeys.length > 0) {
        key_resp_panas.keys = _key_resp_panas_allKeys[_key_resp_panas_allKeys.length - 1].name;  // just the last key pressed
        key_resp_panas.rt = _key_resp_panas_allKeys[_key_resp_panas_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    panasComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function panasRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'panas'-------
    panasComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_panas.response', slider_panas.getRating());
    psychoJS.experiment.addData('slider_panas.rt', slider_panas.getRT());
    key_resp_panas.stop();
    // the Routine "panas" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function health_scdRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'health_scd'-------
    t = 0;
    health_scdClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_health_scd.setText(prompt);
    slider_health_scd.reset()
    slider_2_health_scd.reset()
    key_resp_health_scd.keys = undefined;
    key_resp_health_scd.rt = undefined;
    _key_resp_health_scd_allKeys = [];
    key_resp_2_health_scd.keys = undefined;
    key_resp_2_health_scd.rt = undefined;
    _key_resp_2_health_scd_allKeys = [];
    // keep track of which components have finished
    health_scdComponents = [];
    health_scdComponents.push(text_health_scd);
    health_scdComponents.push(to_cont_health_scd);
    health_scdComponents.push(to_cont_2_health_scd);
    health_scdComponents.push(slider_health_scd);
    health_scdComponents.push(slider_2_health_scd);
    health_scdComponents.push(key_resp_health_scd);
    health_scdComponents.push(key_resp_2_health_scd);
    
    health_scdComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function health_scdRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'health_scd'-------
    // get current time
    t = health_scdClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_health_scd* updates
    if (t >= 0.0 && text_health_scd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_health_scd.tStart = t;  // (not accounting for frame time here)
      text_health_scd.frameNStart = frameN;  // exact frame index
      
      text_health_scd.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_health_scd.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_health_scd.setAutoDraw(false);
    }
    
    // *to_cont_health_scd* updates
    if ((slider_health_scd.getRating() != None) && to_cont_health_scd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_cont_health_scd.tStart = t;  // (not accounting for frame time here)
      to_cont_health_scd.frameNStart = frameN;  // exact frame index
      
      to_cont_health_scd.setAutoDraw(true);
    }

    if (to_cont_health_scd.status === PsychoJS.Status.STARTED && t >= (to_cont_health_scd.tStart + 999999.0)) {
      to_cont_health_scd.setAutoDraw(false);
    }
    
    // *to_cont_2_health_scd* updates
    if ((slider_2_health_scd.getRating() != None) && to_cont_2_health_scd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_cont_2_health_scd.tStart = t;  // (not accounting for frame time here)
      to_cont_2_health_scd.frameNStart = frameN;  // exact frame index
      
      to_cont_2_health_scd.setAutoDraw(true);
    }

    if (to_cont_2_health_scd.status === PsychoJS.Status.STARTED && t >= (to_cont_2_health_scd.tStart + 999999.0)) {
      to_cont_2_health_scd.setAutoDraw(false);
    }
    
    // *slider_health_scd* updates
    if ((isSlider == 0) && slider_health_scd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_health_scd.tStart = t;  // (not accounting for frame time here)
      slider_health_scd.frameNStart = frameN;  // exact frame index
      
      slider_health_scd.setAutoDraw(true);
    }

    if (slider_health_scd.status === PsychoJS.Status.STARTED && t >= (slider_health_scd.tStart + 999999.0)) {
      slider_health_scd.setAutoDraw(false);
    }
    
    // *slider_2_health_scd* updates
    if ((isSlider == 1) && slider_2_health_scd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_2_health_scd.tStart = t;  // (not accounting for frame time here)
      slider_2_health_scd.frameNStart = frameN;  // exact frame index
      
      slider_2_health_scd.setAutoDraw(true);
    }

    if (slider_2_health_scd.status === PsychoJS.Status.STARTED && t >= (slider_2_health_scd.tStart + 999999.0)) {
      slider_2_health_scd.setAutoDraw(false);
    }
    
    // *key_resp_health_scd* updates
    if ((slider_health_scd.getRating() != None) && key_resp_health_scd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_health_scd.tStart = t;  // (not accounting for frame time here)
      key_resp_health_scd.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_health_scd.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_health_scd.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_health_scd.clearEvents(); });
    }

    if (key_resp_health_scd.status === PsychoJS.Status.STARTED && t >= (key_resp_health_scd.tStart + 999999.0)) {
      key_resp_health_scd.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_health_scd.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_health_scd.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_health_scd_allKeys = _key_resp_health_scd_allKeys.concat(theseKeys);
      if (_key_resp_health_scd_allKeys.length > 0) {
        key_resp_health_scd.keys = _key_resp_health_scd_allKeys[_key_resp_health_scd_allKeys.length - 1].name;  // just the last key pressed
        key_resp_health_scd.rt = _key_resp_health_scd_allKeys[_key_resp_health_scd_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *key_resp_2_health_scd* updates
    if ((slider_2_health_scd.getRating() != None) && key_resp_2_health_scd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2_health_scd.tStart = t;  // (not accounting for frame time here)
      key_resp_2_health_scd.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2_health_scd.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2_health_scd.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2_health_scd.clearEvents(); });
    }

    if (key_resp_2_health_scd.status === PsychoJS.Status.STARTED && t >= (key_resp_2_health_scd.tStart + 999999.0)) {
      key_resp_2_health_scd.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_2_health_scd.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2_health_scd.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_health_scd_allKeys = _key_resp_2_health_scd_allKeys.concat(theseKeys);
      if (_key_resp_2_health_scd_allKeys.length > 0) {
        key_resp_2_health_scd.keys = _key_resp_2_health_scd_allKeys[_key_resp_2_health_scd_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2_health_scd.rt = _key_resp_2_health_scd_allKeys[_key_resp_2_health_scd_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    health_scdComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function health_scdRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'health_scd'-------
    health_scdComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_health_scd.response', slider_health_scd.getRating());
    psychoJS.experiment.addData('slider_health_scd.rt', slider_health_scd.getRT());
    psychoJS.experiment.addData('slider_2_health_scd.response', slider_2_health_scd.getRating());
    psychoJS.experiment.addData('slider_2_health_scd.rt', slider_2_health_scd.getRT());
    key_resp_health_scd.stop();
    key_resp_2_health_scd.stop();
    // the Routine "health_scd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function scam_susceptibilityRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'scam_susceptibility'-------
    t = 0;
    scam_susceptibilityClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_scam_suscep.setText(prompt);
    slider_scam_suscep.reset()
    key_resp_scam_suscep.keys = undefined;
    key_resp_scam_suscep.rt = undefined;
    _key_resp_scam_suscep_allKeys = [];
    key_resp_2_scam_suscep.keys = undefined;
    key_resp_2_scam_suscep.rt = undefined;
    _key_resp_2_scam_suscep_allKeys = [];
    // keep track of which components have finished
    scam_susceptibilityComponents = [];
    scam_susceptibilityComponents.push(text_scam_suscep);
    scam_susceptibilityComponents.push(slider_scam_suscep);
    scam_susceptibilityComponents.push(to_cont_scam_suscep);
    scam_susceptibilityComponents.push(textbox_scam_suscep);
    scam_susceptibilityComponents.push(key_resp_scam_suscep);
    scam_susceptibilityComponents.push(to_cont_2_scam_suscep);
    scam_susceptibilityComponents.push(key_resp_2_scam_suscep);
    
    scam_susceptibilityComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function scam_susceptibilityRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'scam_susceptibility'-------
    // get current time
    t = scam_susceptibilityClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_scam_suscep* updates
    if (t >= 0.0 && text_scam_suscep.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_scam_suscep.tStart = t;  // (not accounting for frame time here)
      text_scam_suscep.frameNStart = frameN;  // exact frame index
      
      text_scam_suscep.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_scam_suscep.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_scam_suscep.setAutoDraw(false);
    }
    
    // *slider_scam_suscep* updates
    if ((isTextBox == 0) && slider_scam_suscep.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_scam_suscep.tStart = t;  // (not accounting for frame time here)
      slider_scam_suscep.frameNStart = frameN;  // exact frame index
      
      slider_scam_suscep.setAutoDraw(true);
    }

    if (slider_scam_suscep.status === PsychoJS.Status.STARTED && t >= (slider_scam_suscep.tStart + 999999.0)) {
      slider_scam_suscep.setAutoDraw(false);
    }
    
    // *to_cont_scam_suscep* updates
    if ((slider_scam_suscep.getRating() != None) && to_cont_scam_suscep.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_cont_scam_suscep.tStart = t;  // (not accounting for frame time here)
      to_cont_scam_suscep.frameNStart = frameN;  // exact frame index
      
      to_cont_scam_suscep.setAutoDraw(true);
    }

    if (to_cont_scam_suscep.status === PsychoJS.Status.STARTED && t >= (to_cont_scam_suscep.tStart + 999999.0)) {
      to_cont_scam_suscep.setAutoDraw(false);
    }
    
    // *textbox_scam_suscep* updates
    if ((isTextBox == 1) && textbox_scam_suscep.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_scam_suscep.tStart = t;  // (not accounting for frame time here)
      textbox_scam_suscep.frameNStart = frameN;  // exact frame index
      
      textbox_scam_suscep.setAutoDraw(true);
    }

    if (textbox_scam_suscep.status === PsychoJS.Status.STARTED && t >= (textbox_scam_suscep.tStart + 999999.0)) {
      textbox_scam_suscep.setAutoDraw(false);
    }
    
    // *key_resp_scam_suscep* updates
    if ((slider_scam_suscep.getRating() != None) && key_resp_scam_suscep.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_scam_suscep.tStart = t;  // (not accounting for frame time here)
      key_resp_scam_suscep.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_scam_suscep.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_scam_suscep.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_scam_suscep.clearEvents(); });
    }

    if (key_resp_scam_suscep.status === PsychoJS.Status.STARTED && t >= (key_resp_scam_suscep.tStart + 999999.0)) {
      key_resp_scam_suscep.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_scam_suscep.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_scam_suscep.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_scam_suscep_allKeys = _key_resp_scam_suscep_allKeys.concat(theseKeys);
      if (_key_resp_scam_suscep_allKeys.length > 0) {
        key_resp_scam_suscep.keys = _key_resp_scam_suscep_allKeys[_key_resp_scam_suscep_allKeys.length - 1].name;  // just the last key pressed
        key_resp_scam_suscep.rt = _key_resp_scam_suscep_allKeys[_key_resp_scam_suscep_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *to_cont_2_scam_suscep* updates
    if ((textbox_scam_suscep.getText() != '') && to_cont_2_scam_suscep.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_cont_2_scam_suscep.tStart = t;  // (not accounting for frame time here)
      to_cont_2_scam_suscep.frameNStart = frameN;  // exact frame index
      
      to_cont_2_scam_suscep.setAutoDraw(true);
    }

    if (to_cont_2_scam_suscep.status === PsychoJS.Status.STARTED && t >= (to_cont_2_scam_suscep.tStart + 999999.0)) {
      to_cont_2_scam_suscep.setAutoDraw(false);
    }
    
    // *key_resp_2_scam_suscep* updates
    if ((textbox_scam_suscep.getText() != '') && key_resp_2_scam_suscep.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2_scam_suscep.tStart = t;  // (not accounting for frame time here)
      key_resp_2_scam_suscep.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2_scam_suscep.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2_scam_suscep.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2_scam_suscep.clearEvents(); });
    }

    if (key_resp_2_scam_suscep.status === PsychoJS.Status.STARTED && t >= (key_resp_2_scam_suscep.tStart + 999999.0)) {
      key_resp_2_scam_suscep.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_2_scam_suscep.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2_scam_suscep.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_scam_suscep_allKeys = _key_resp_2_scam_suscep_allKeys.concat(theseKeys);
      if (_key_resp_2_scam_suscep_allKeys.length > 0) {
        key_resp_2_scam_suscep.keys = _key_resp_2_scam_suscep_allKeys[_key_resp_2_scam_suscep_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2_scam_suscep.rt = _key_resp_2_scam_suscep_allKeys[_key_resp_2_scam_suscep_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    scam_susceptibilityComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function scam_susceptibilityRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'scam_susceptibility'-------
    scam_susceptibilityComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_scam_suscep.response', slider_scam_suscep.getRating());
    psychoJS.experiment.addData('slider_scam_suscep.rt', slider_scam_suscep.getRT());
    psychoJS.experiment.addData('textbox_scam_suscep.text',textbox_scam_suscep.text)
    textbox_scam_suscep.reset()
    key_resp_scam_suscep.stop();
    key_resp_2_scam_suscep.stop();
    // the Routine "scam_susceptibility" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function demographicsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'demographics'-------
    t = 0;
    demographicsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_demo.setText(prompt);
    slider_2_demo.reset()
    key_resp_demo.keys = undefined;
    key_resp_demo.rt = undefined;
    _key_resp_demo_allKeys = [];
    key_resp_2_demo.keys = undefined;
    key_resp_2_demo.rt = undefined;
    _key_resp_2_demo_allKeys = [];
    key_resp_0_demo.keys = undefined;
    key_resp_0_demo.rt = undefined;
    _key_resp_0_demo_allKeys = [];
    key_resp_demo_textbox.keys = undefined;
    key_resp_demo_textbox.rt = undefined;
    _key_resp_demo_textbox_allKeys = [];
    demo_resp_0.reset()
    demo_resp_1.reset()
    demo_resp_2.reset()
    demo_resp_3.reset()
    // keep track of which components have finished
    demographicsComponents = [];
    demographicsComponents.push(text_demo);
    demographicsComponents.push(to_cont_demo_0);
    demographicsComponents.push(to_cont_demo);
    demographicsComponents.push(to_cont_2_demo);
    demographicsComponents.push(to_cont_textbox_demo);
    demographicsComponents.push(slider_2_demo);
    demographicsComponents.push(key_resp_demo);
    demographicsComponents.push(key_resp_2_demo);
    demographicsComponents.push(key_resp_0_demo);
    demographicsComponents.push(key_resp_demo_textbox);
    demographicsComponents.push(textbox_demo);
    demographicsComponents.push(demo_resp_0);
    demographicsComponents.push(demo_resp_1);
    demographicsComponents.push(demo_resp_2);
    demographicsComponents.push(demo_resp_3);
    
    demographicsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function demographicsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'demographics'-------
    // get current time
    t = demographicsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_demo* updates
    if (t >= 0.0 && text_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_demo.tStart = t;  // (not accounting for frame time here)
      text_demo.frameNStart = frameN;  // exact frame index
      
      text_demo.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_demo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_demo.setAutoDraw(false);
    }
    
    // *to_cont_demo_0* updates
    if ((demo_resp_0.getRating() != None) && to_cont_demo_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_cont_demo_0.tStart = t;  // (not accounting for frame time here)
      to_cont_demo_0.frameNStart = frameN;  // exact frame index
      
      to_cont_demo_0.setAutoDraw(true);
    }

    if (to_cont_demo_0.status === PsychoJS.Status.STARTED && t >= (to_cont_demo_0.tStart + 999999.0)) {
      to_cont_demo_0.setAutoDraw(false);
    }
    
    // *to_cont_demo* updates
    if ((demo_resp_1.getRating() != None or demo_resp_2.getRating() != None or demo_resp_3.getRating() != None) && to_cont_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_cont_demo.tStart = t;  // (not accounting for frame time here)
      to_cont_demo.frameNStart = frameN;  // exact frame index
      
      to_cont_demo.setAutoDraw(true);
    }

    if (to_cont_demo.status === PsychoJS.Status.STARTED && t >= (to_cont_demo.tStart + 999999.0)) {
      to_cont_demo.setAutoDraw(false);
    }
    
    // *to_cont_2_demo* updates
    if ((slider_2_demo.getRating() != None) && to_cont_2_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_cont_2_demo.tStart = t;  // (not accounting for frame time here)
      to_cont_2_demo.frameNStart = frameN;  // exact frame index
      
      to_cont_2_demo.setAutoDraw(true);
    }

    if (to_cont_2_demo.status === PsychoJS.Status.STARTED && t >= (to_cont_2_demo.tStart + 999999.0)) {
      to_cont_2_demo.setAutoDraw(false);
    }
    
    // *to_cont_textbox_demo* updates
    if ((textbox_demo.getText() != '') && to_cont_textbox_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_cont_textbox_demo.tStart = t;  // (not accounting for frame time here)
      to_cont_textbox_demo.frameNStart = frameN;  // exact frame index
      
      to_cont_textbox_demo.setAutoDraw(true);
    }

    if (to_cont_textbox_demo.status === PsychoJS.Status.STARTED && t >= (to_cont_textbox_demo.tStart + 999999.0)) {
      to_cont_textbox_demo.setAutoDraw(false);
    }
    
    // *slider_2_demo* updates
    if ((isSlider == 1) && slider_2_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_2_demo.tStart = t;  // (not accounting for frame time here)
      slider_2_demo.frameNStart = frameN;  // exact frame index
      
      slider_2_demo.setAutoDraw(true);
    }

    if (slider_2_demo.status === PsychoJS.Status.STARTED && t >= (slider_2_demo.tStart + 999999.0)) {
      slider_2_demo.setAutoDraw(false);
    }
    
    // *key_resp_demo* updates
    if ((demo_resp_1.getRating() != None or demo_resp_2.getRating() != None or demo_resp_3.getRating() != None) && key_resp_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_demo.tStart = t;  // (not accounting for frame time here)
      key_resp_demo.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_demo.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_demo.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_demo.clearEvents(); });
    }

    if (key_resp_demo.status === PsychoJS.Status.STARTED && t >= (key_resp_demo.tStart + 999999.0)) {
      key_resp_demo.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_demo.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_demo.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_demo_allKeys = _key_resp_demo_allKeys.concat(theseKeys);
      if (_key_resp_demo_allKeys.length > 0) {
        key_resp_demo.keys = _key_resp_demo_allKeys[_key_resp_demo_allKeys.length - 1].name;  // just the last key pressed
        key_resp_demo.rt = _key_resp_demo_allKeys[_key_resp_demo_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *key_resp_2_demo* updates
    if ((slider_2_demo.getRating() != None) && key_resp_2_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2_demo.tStart = t;  // (not accounting for frame time here)
      key_resp_2_demo.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2_demo.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2_demo.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2_demo.clearEvents(); });
    }

    if (key_resp_2_demo.status === PsychoJS.Status.STARTED && t >= (key_resp_2_demo.tStart + 999999.0)) {
      key_resp_2_demo.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_2_demo.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2_demo.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_demo_allKeys = _key_resp_2_demo_allKeys.concat(theseKeys);
      if (_key_resp_2_demo_allKeys.length > 0) {
        key_resp_2_demo.keys = _key_resp_2_demo_allKeys[_key_resp_2_demo_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2_demo.rt = _key_resp_2_demo_allKeys[_key_resp_2_demo_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *key_resp_0_demo* updates
    if ((demo_resp_0.getRating() != None) && key_resp_0_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_0_demo.tStart = t;  // (not accounting for frame time here)
      key_resp_0_demo.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_0_demo.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_0_demo.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_0_demo.clearEvents(); });
    }

    if (key_resp_0_demo.status === PsychoJS.Status.STARTED && t >= (key_resp_0_demo.tStart + 999999.0)) {
      key_resp_0_demo.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_0_demo.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_0_demo.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_0_demo_allKeys = _key_resp_0_demo_allKeys.concat(theseKeys);
      if (_key_resp_0_demo_allKeys.length > 0) {
        key_resp_0_demo.keys = _key_resp_0_demo_allKeys[_key_resp_0_demo_allKeys.length - 1].name;  // just the last key pressed
        key_resp_0_demo.rt = _key_resp_0_demo_allKeys[_key_resp_0_demo_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *key_resp_demo_textbox* updates
    if ((textbox_demo.getText() != '') && key_resp_demo_textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_demo_textbox.tStart = t;  // (not accounting for frame time here)
      key_resp_demo_textbox.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_demo_textbox.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_demo_textbox.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_demo_textbox.clearEvents(); });
    }

    if (key_resp_demo_textbox.status === PsychoJS.Status.STARTED && t >= (key_resp_demo_textbox.tStart + 999999.0)) {
      key_resp_demo_textbox.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_demo_textbox.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_demo_textbox.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_demo_textbox_allKeys = _key_resp_demo_textbox_allKeys.concat(theseKeys);
      if (_key_resp_demo_textbox_allKeys.length > 0) {
        key_resp_demo_textbox.keys = _key_resp_demo_textbox_allKeys[_key_resp_demo_textbox_allKeys.length - 1].name;  // just the last key pressed
        key_resp_demo_textbox.rt = _key_resp_demo_textbox_allKeys[_key_resp_demo_textbox_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *textbox_demo* updates
    if ((isSlider == -1) && textbox_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_demo.tStart = t;  // (not accounting for frame time here)
      textbox_demo.frameNStart = frameN;  // exact frame index
      
      textbox_demo.setAutoDraw(true);
    }

    if (textbox_demo.status === PsychoJS.Status.STARTED && t >= (textbox_demo.tStart + 999999.0)) {
      textbox_demo.setAutoDraw(false);
    }
    
    // *demo_resp_0* updates
    if ((isSlider == 2) && demo_resp_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_resp_0.tStart = t;  // (not accounting for frame time here)
      demo_resp_0.frameNStart = frameN;  // exact frame index
      
      demo_resp_0.setAutoDraw(true);
    }

    if (demo_resp_0.status === PsychoJS.Status.STARTED && t >= (demo_resp_0.tStart + 999999.0)) {
      demo_resp_0.setAutoDraw(false);
    }
    
    // *demo_resp_1* updates
    if ((isSlider == 0) && demo_resp_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_resp_1.tStart = t;  // (not accounting for frame time here)
      demo_resp_1.frameNStart = frameN;  // exact frame index
      
      demo_resp_1.setAutoDraw(true);
    }

    if (demo_resp_1.status === PsychoJS.Status.STARTED && t >= (demo_resp_1.tStart + 999999.0)) {
      demo_resp_1.setAutoDraw(false);
    }
    
    // *demo_resp_2* updates
    if ((isSlider == 0) && demo_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_resp_2.tStart = t;  // (not accounting for frame time here)
      demo_resp_2.frameNStart = frameN;  // exact frame index
      
      demo_resp_2.setAutoDraw(true);
    }

    if (demo_resp_2.status === PsychoJS.Status.STARTED && t >= (demo_resp_2.tStart + 999999.0)) {
      demo_resp_2.setAutoDraw(false);
    }
    
    // *demo_resp_3* updates
    if ((isSlider == 0) && demo_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_resp_3.tStart = t;  // (not accounting for frame time here)
      demo_resp_3.frameNStart = frameN;  // exact frame index
      
      demo_resp_3.setAutoDraw(true);
    }

    if (demo_resp_3.status === PsychoJS.Status.STARTED && t >= (demo_resp_3.tStart + 999999.0)) {
      demo_resp_3.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    demographicsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function demographicsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'demographics'-------
    demographicsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_2_demo.response', slider_2_demo.getRating());
    psychoJS.experiment.addData('slider_2_demo.rt', slider_2_demo.getRT());
    key_resp_demo.stop();
    key_resp_2_demo.stop();
    key_resp_0_demo.stop();
    key_resp_demo_textbox.stop();
    psychoJS.experiment.addData('textbox_demo.text',textbox_demo.text)
    textbox_demo.reset()
    psychoJS.experiment.addData('demo_resp_0.response', demo_resp_0.getRating());
    psychoJS.experiment.addData('demo_resp_0.rt', demo_resp_0.getRT());
    psychoJS.experiment.addData('demo_resp_1.response', demo_resp_1.getRating());
    psychoJS.experiment.addData('demo_resp_1.rt', demo_resp_1.getRT());
    psychoJS.experiment.addData('demo_resp_2.response', demo_resp_2.getRating());
    psychoJS.experiment.addData('demo_resp_2.rt', demo_resp_2.getRT());
    psychoJS.experiment.addData('demo_resp_3.response', demo_resp_3.getRating());
    psychoJS.experiment.addData('demo_resp_3.rt', demo_resp_3.getRT());
    // the Routine "demographics" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function uclaRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'ucla'-------
    t = 0;
    uclaClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_ucla.reset()
    key_resp_ucla.keys = undefined;
    key_resp_ucla.rt = undefined;
    _key_resp_ucla_allKeys = [];
    // keep track of which components have finished
    uclaComponents = [];
    uclaComponents.push(text_ucla);
    uclaComponents.push(to_cont_ucla);
    uclaComponents.push(slider_ucla);
    uclaComponents.push(key_resp_ucla);
    
    uclaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function uclaRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'ucla'-------
    // get current time
    t = uclaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_ucla* updates
    if (t >= 0.0 && text_ucla.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_ucla.tStart = t;  // (not accounting for frame time here)
      text_ucla.frameNStart = frameN;  // exact frame index
      
      text_ucla.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_ucla.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_ucla.setAutoDraw(false);
    }
    
    // *to_cont_ucla* updates
    if ((slider_ucla.getRating() != None) && to_cont_ucla.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_cont_ucla.tStart = t;  // (not accounting for frame time here)
      to_cont_ucla.frameNStart = frameN;  // exact frame index
      
      to_cont_ucla.setAutoDraw(true);
    }

    frameRemains = 999999.0  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((to_cont_ucla.status === PsychoJS.Status.STARTED || to_cont_ucla.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      to_cont_ucla.setAutoDraw(false);
    }
    
    // *slider_ucla* updates
    if (t >= 0.0 && slider_ucla.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_ucla.tStart = t;  // (not accounting for frame time here)
      slider_ucla.frameNStart = frameN;  // exact frame index
      
      slider_ucla.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (slider_ucla.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      slider_ucla.setAutoDraw(false);
    }
    
    // *key_resp_ucla* updates
    if ((slider_ucla.getRating() != None) && key_resp_ucla.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_ucla.tStart = t;  // (not accounting for frame time here)
      key_resp_ucla.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_ucla.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ucla.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ucla.clearEvents(); });
    }

    if (key_resp_ucla.status === PsychoJS.Status.STARTED && t >= (key_resp_ucla.tStart + 999999.0)) {
      key_resp_ucla.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_ucla.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_ucla.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_ucla_allKeys = _key_resp_ucla_allKeys.concat(theseKeys);
      if (_key_resp_ucla_allKeys.length > 0) {
        key_resp_ucla.keys = _key_resp_ucla_allKeys[_key_resp_ucla_allKeys.length - 1].name;  // just the last key pressed
        key_resp_ucla.rt = _key_resp_ucla_allKeys[_key_resp_ucla_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    uclaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function uclaRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'ucla'-------
    uclaComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_ucla.response', slider_ucla.getRating());
    psychoJS.experiment.addData('slider_ucla.rt', slider_ucla.getRT());
    key_resp_ucla.stop();
    // the Routine "ucla" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function sniRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'sni'-------
    t = 0;
    sniClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_sni.setText(prompt);
    slider_sni.reset()
    key_resp_sni.keys = undefined;
    key_resp_sni.rt = undefined;
    _key_resp_sni_allKeys = [];
    // keep track of which components have finished
    sniComponents = [];
    sniComponents.push(text_sni);
    sniComponents.push(to_cont_sni);
    sniComponents.push(slider_sni);
    sniComponents.push(key_resp_sni);
    
    sniComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function sniRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'sni'-------
    // get current time
    t = sniClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_sni* updates
    if (t >= 0.0 && text_sni.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_sni.tStart = t;  // (not accounting for frame time here)
      text_sni.frameNStart = frameN;  // exact frame index
      
      text_sni.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_sni.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_sni.setAutoDraw(false);
    }
    
    // *to_cont_sni* updates
    if ((slider_sni.getRating() != None) && to_cont_sni.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_cont_sni.tStart = t;  // (not accounting for frame time here)
      to_cont_sni.frameNStart = frameN;  // exact frame index
      
      to_cont_sni.setAutoDraw(true);
    }

    if (to_cont_sni.status === PsychoJS.Status.STARTED && t >= (to_cont_sni.tStart + 999999.0)) {
      to_cont_sni.setAutoDraw(false);
    }
    
    // *slider_sni* updates
    if (t >= 0.0 && slider_sni.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_sni.tStart = t;  // (not accounting for frame time here)
      slider_sni.frameNStart = frameN;  // exact frame index
      
      slider_sni.setAutoDraw(true);
    }

    frameRemains = 0.0 + 999999.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (slider_sni.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      slider_sni.setAutoDraw(false);
    }
    
    // *key_resp_sni* updates
    if ((slider_sni.getRating() != None) && key_resp_sni.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_sni.tStart = t;  // (not accounting for frame time here)
      key_resp_sni.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_sni.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_sni.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_sni.clearEvents(); });
    }

    if (key_resp_sni.status === PsychoJS.Status.STARTED && t >= (key_resp_sni.tStart + 999999.0)) {
      key_resp_sni.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_sni.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_sni.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_sni_allKeys = _key_resp_sni_allKeys.concat(theseKeys);
      if (_key_resp_sni_allKeys.length > 0) {
        key_resp_sni.keys = _key_resp_sni_allKeys[_key_resp_sni_allKeys.length - 1].name;  // just the last key pressed
        key_resp_sni.rt = _key_resp_sni_allKeys[_key_resp_sni_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    sniComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function sniRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'sni'-------
    sniComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_sni.response', slider_sni.getRating());
    psychoJS.experiment.addData('slider_sni.rt', slider_sni.getRT());
    key_resp_sni.stop();
    // the Routine "sni" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function endRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    win.setColor("black");
    
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function endRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_text.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function endRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'end'-------
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}

function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
