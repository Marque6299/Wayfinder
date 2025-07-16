// Data structure for easy content management
const positiveAssessmentData = {
    "Active Listening": {
      "score": 8,
      "subAttributes": {
        "Reflective": {
          "points": 2,
          "phrases": [
            "To Confirm",
            "What I Can Do",
            "You Mentioned",
            "On The Same Page",
            "I Understand You",
            "You Are Saying"
          ],
          "highValuePhrases": [
            "Let Me Confirm",
            "To Repeat",
            "To Summarize",
            "To Recap",
            "Let Me Go Over",
            "It Sounds Like"
          ]
        },
        "Confirmation": {
          "points": 2,
          "phrases": [
            "Thank You Confirming",
            "Is That Correct",
            "Understand Concern",
            "Am I Correct",
            "I Confirm",
            "Yes That Is Correct"
          ],
          "highValuePhrases": [
            "Is This Correct",
            "Thanks Confirming",
            "Is That Right",
            "Thank You Sharing",
            "Thank You For Understanding",
            "Thank You For Sharing"
          ]
        },
        "Clarification": {
          "points": 4,
          "phrases": [
            "Can You Provide",
            "You Are Referring To",
            "To Clarify",
            "Do You Need",
            "Want To Make Sure",
            "Can You Repeat"
          ],
          "highValuePhrases": [
            "Could You Provide",
            "Does That Sound",
            "Tell Me More",
            "Can Tell More",
            "To Make Sure I Understand",
            "Would You Provide"
          ]
        }
      }
    },
    "Empathy": {
      "score": 7,
      "subAttributes": {
        "Encouraging": {
          "points": 2,
          "phrases": [
            "I Am Sorry",
            "Really Sorry",
            "Sorry To Hear",
            "I Do Apologize",
            "Sure I Can",
            "Do Not Have To Worry"
          ],
          "highValuePhrases": [
            "Condolences",
            "Sorry Hear Your Loss",
            "Regret Hassle Inconvenience Issue",
            "Apologize About That",
            "My Condolences",
            "Feelings Are Valid"
          ]
        },
        "Acknowledgement": {
          "points": 2,
          "phrases": [
            "I Understand",
            "Understand Issue",
            "How Frustrating",
            "Understand Frustrate",
            "I Understand Your Frustration",
            "I Understand Where You Are Coming From"
          ],
          "highValuePhrases": [
            "I Completely Understand Your Frustration",
            "You Are Going Through This",
            "It Is Frustrating Sounds Frustrating",
            "Really Challenging",
            "That Is Terrible",
            "I Know It Is Frustrating"
          ]
        },
        "Personal Connection": {
          "points": 3,
          "phrases": [
            "Here To Assist",
            "Can Imagine",
            "Hope Everything",
            "Hope Everything",
            "Is Important To You",
            "Work Together"
          ],
          "highValuePhrases": [
            "Feel The Same Way",
            "Hope You Feel",
            "Can Only Imagine",
            "Will Work To",
            "How Inconvenient",
            "Not Alone"
          ]
        }
      }
    },
    "Engagement": {
      "score": 9,
      "subAttributes": {
        "Follow Up": {
          "points": 2,
          "phrases": [
            "Let Me Check",
            "I Am Checking",
            "I Can Check",
            "As Soon As Possible",
            "Check For You",
            "Will Follow-Up"
          ],
          "highValuePhrases": [
            "Let Me Take A Look",
            "Keep You Updated",
            "We Can Check",
            "Checking For You",
            "We Will Follow-Up",
            "You Are Having Trouble With"
          ]
        },
        "Dynamic": {
          "points": 5,
          "phrases": [
            "Let Me See",
            "Thank You For Your Patience",
            "Appreciate Your Patience",
            "Thank You For Waiting",
            "Thanks For Your Patience",
            "Thank You For Holding"
          ],
          "highValuePhrases": [
            "Thanks For Waiting",
            "Thank You For Your Time",
            "Thank You For Your Understanding",
            "Thanks For Holding",
            "Appreciate Your Understanding",
            "Going To Transfer You"
          ]
        },
        "Proactive": {
          "points": 2,
          "phrases": [
            "Thank You For Holding",
            "Good To Hear",
            "More Details",
            "Quickly As Possible",
            "Tell Me More",
            "What Would You Like"
          ],
          "highValuePhrases": [
            "Going To Transfer You",
            "Good For You",
            "Further Details",
            "Explain More",
            "Elaborate More",
            "More Detail"
          ]
        }
      }
    },
    "Positive Language": {
      "score": 14,
      "subAttributes": {
        "Positivity": {
          "points": 4,
          "phrases": [
            "Perfect",
            "Thank You For Reaching Out",
            "Absolutely",
            "Certainly",
            "Can Do That",
            "Good News"
          ],
          "highValuePhrases": [
            "Awesome",
            "Great News",
            "Amazing",
            "Thank You For Bringing This",
            "Excellent",
            "Fantastic"
          ]
        },
        "Politeness": {
          "points": 4,
          "phrases": [
            "Happy To",
            "Appreciate Your Patience",
            "Take Your Time",
            "Glad I Could",
            "There Might Be",
            "Appreciate Your Understanding"
          ],
          "highValuePhrases": [
            "I Hear You",
            "That Is Possible",
            "Would Be Glad",
            "Would Be Glad",
            "There Is A Chance",
            "Appreciate Your Kind Understanding"
          ]
        },
        "Phrasing": {
          "points": 6,
          "phrases": [
            "I Totally",
            "Happy To Help",
            "Pleasure To",
            "Be Happy To",
            "Happy To Help You",
            "That Is Great"
          ],
          "highValuePhrases": [
            "I Would Love To",
            "Pleasure To Help",
            "Would Be Happy",
            "I Am Sure",
            "I Agree",
            "Absolutely Correct"
          ]
        }
      }
    },
    "Advocacy": {
      "score": 13,
      "subAttributes": {
        "Reassurance": {
          "points": 5,
          "phrases": [
            "I Can Assist",
            "Do My Best",
            "Rest Assured",
            "I Got You",
            "Do That For You",
            "Nothing To Worry About"
          ],
          "highValuePhrases": [
            "Find A Solution",
            "Will Do Everything",
            "You Are Correct",
            "We Can Assist",
            "Will Take Care Of This",
            "Get This Sorted Out"
          ]
        },
        "Empowerment": {
          "points": 5,
          "phrases": [
            "Here To Help",
            "Could You Please Provide",
            "Here For You",
            "Take Care Of",
            "Let Me Help You With",
            "Could You Please Share"
          ],
          "highValuePhrases": [
            "Will Help You Get",
            "Do Everything I Can",
            "Take Care Of That",
            "Let Me Look Into This",
            "I Will Definitely Do",
            "Come To The Right Place"
          ]
        },
        "Resourcefulness": {
          "points": 3,
          "phrases": [
            "Look Into This",
            "Will Look Into",
            "They Will Help",
            "They Can Help",
            "Find A Solution",
            "Handle This For You"
          ],
          "highValuePhrases": [
            "Get Resolved",
            "Will Resolve This For You",
            "Will Solve This",
            "Will Be Looking Into This",
            "Will Help With",
            "Will Resolve Your Issue"
          ]
        }
      }
    },
    "Problem Solving": {
      "score": 9,
      "subAttributes": {
        "Solution": {
          "points": 5,
          "phrases": [
            "Canceled",
            "Processed",
            "Resolve",
            "Self Service",
            "Have Successfully",
            "Good To Go"
          ],
          "highValuePhrases": [
            "What I Can Do For You",
            "Solve",
            "Is Complete",
            "Has Been Changed",
            "Fix",
            "Find A Solution"
          ]
        },
        "Implementation": {
          "points": 3,
          "phrases": [
            "We Are Going To",
            "Complete That",
            "Finished",
            "Next Step",
            "To Create",
            "Can Create"
          ],
          "highValuePhrases": [
            "Step By Step",
            "Take Care Of This Right Away",
            "Get It Right",
            "We Can Fix",
            "Can Figure Out",
            "Did I Answer"
          ]
        },
        "Issue Identification": {
          "points": 2,
          "phrases": [
            "In The Future",
            "You Can Try",
            "Another Option",
            "An Alternate",
            "Another Option Is",
            "Will Find A Solution"
          ],
          "highValuePhrases": [
            "Will Resolve Your Issue",
            "Did I Miss Anything",
            "Will Solve It",
            "Will Resolve It",
            "For Clarity",
            "We Have Options"
          ]
        }
      }
    }  
};

const negativeAssessmentData = {
    "Uncertainty": {
      "score": 12,
      "subAttributes": {
        "Non-committal": {
          "points": -2,
          "phrases": [
            "Not Sure",
            "It Might Be",
            "I Cannot Guarantee",
            "There Is A Chance",
            "No Idea",
            "Can Not Answer"
          ],
          "highValuePhrases": [
            "I Am Confused",
            "I Am Sorry But I Cannot",
            "I Am Not So Sure",
            "I Will Try And Find Out",
            "Can Not Figure",
            "Do Not Have The Answer"
          ]
        },
        "Knowledge": {
          "points": -4,
          "phrases": [
            "Do Not Know",
            "I Forgot",
            "I Suppose",
            "I Am Not Aware",
            "I Am Having Trouble",
            "Do Not Really Know"
          ],
          "highValuePhrases": [
            "Having Difficulty",
            "Not Certain",
            "I Would Not Know",
            "Non Expert",
            "Never Heard Of",
            "I Am Struggling"
          ]
        },
        "Non-Specific": {
          "points": -5,
          "phrases": [
            "Do Not Have Access",
            "Do Not Have Any Information",
            "You Might Have To",
            "You May Have To",
            "Do Not Have Information",
            "No Clue"
          ],
          "highValuePhrases": [
            "Do Not Have An Answer",
            "I Am Not Positive",
            "Clueless",
            "What I Think Happened",
            "I Not Positive",
            "Possibly Will Be"
          ]
        }
      }
    },
    "Unclear Language": {
      "score": 6,
      "subAttributes": {
        "Jargon": {
          "points": -2,
          "phrases": [
            "Segment",
            "Voyager",
            "Pnr",
            "Ndc",
            "Gds",
            "Amadeus"
          ],
          "highValuePhrases": [
            "Merchant Of Record",
            "Salesforce",
            "Nbc",
            "Asc",
            "Epc",
            "Ota"
          ]
        },
        "Vagueness": {
          "points": -2,
          "phrases": [
            "Hopefully",
            "Should Be Good",
            "Should Be Fine",
            "Let Us Hope",
            "Probably Because",
            "It Might Take A While"
          ],
          "highValuePhrases": [
            "It May Take A While",
            "See How It Goes",
            "That Fixes It",
            "Probably Be Good",
            "Maybe You Can Try Again Later",
            "Check Back In A Few Days"
          ]
        },
        "Ambiguity": {
          "points": -2,
          "phrases": [
            "Could Work",
            "Might Work",
            "We Might Be Able To",
            "It’S Complicated",
            "We Will  Try To Fix It",
            "Will See What Happens"
          ],
          "highValuePhrases": [
            "Maybe This Will Work",
            "Maybe We Can Try That",
            "Is Probably The Best Option",
            "I Guess We Can Do That",
            "Maybe We Can Look Into It",
            "We Can Maybe Try That"
          ]
        }
      }
    },
    "Negative language": {
      "score": 13,
      "subAttributes": {
        "Blame": {
          "points": -7,
          "phrases": [
            "As I Said",
            "Did You Try",
            "That was Unclear",
            "I Will Repeat",
            "I Can Not Do",
            "Already Explained"
          ],
          "highValuePhrases": [
            "What I Meant",
            "What I Discussed",
            "Trying To Explain",
            "Can Not Understand",
            "Stop Arguing",
            "Calm Down"
          ]
        },
        "Understanding": {
          "points": -6,
          "phrases": [
            "Can I Finish Talking",
            "Speed Up",
            "Slow Down",
            "Do Not Care",
            "Speak Slower",
            "Speak Fast"
          ],
          "highValuePhrases": [
            "Interrupt Me",
            "Know What I Am Doing",
            "Waste Of Time",
            "Dumb",
            "Speak Clear",
            "Is Your Opinion"
          ]
        },
        "Profanity": {
          "points": 0,
          "phrases": [
            "Profanity"
          ],
          "highValuePhrases": []
        }
      }
    },
    "Lack of Ownership": {
      "score": 9,
      "subAttributes": {
        "Avoidance": {
          "points": -5,
          "phrases": [
            "I Am Not Able To",
            "Bad System",
            "System Awful",
            "You People",
            "I Hate It",
            "Not My Problem"
          ],
          "highValuePhrases": [
            "Blame Our",
            "Not My Job",
            "Is Stupid",
            "Stupid Plicy",
            "Hate",
            "Is So Dumb"
          ]
        },
        "Passing Responsibility/\r\nResponse": {
          "points": -2,
          "phrases": [
            "Not Trained",
            "The System Will Not Allow Me",
            "I Do Not Have The Authority",
            "I Just Started",
            "Do Not Handle That",
            "Not Up To Me"
          ],
          "highValuePhrases": [
            "I Just Work Here",
            "I Do Not Have Time",
            "I Wish I Knew",
            "I Just Learned",
            "I Am Not Qualified",
            "Not My Concern"
          ]
        },
        "Defensiveness": {
          "points": -2,
          "phrases": [
            "Listen To Me",
            "Your Fault",
            "Be Quiet",
            "Shut Up",
            "I Will Hang Up",
            "Your Error"
          ],
          "highValuePhrases": [
            "Not My Fault",
            "Your Mistake",
            "You Are Wrong",
            "You Are Not Listening",
            "Can You Listen To Me",
            "Being Difficult"
          ]
        }
      }
    }
};

// Current data reference
let currentAssessmentData = positiveAssessmentData;
let currentPage = 'positive';

// Additional high-value phrases data for positive page
const positiveAdditionalHighValuePhrases = {
    "Reflective": [
      "I See Your Concern",
      "Understand Correctly",
      "Sound Like You",
      "I Have Heard",
      "Understood Correctly",
      "I Hear Your Concern"
    ],
    "Confirmation": [
      "We Confirm",
      "Thanks Sharing",
      "Thanks For Sharing",
      "Good Question",
      "Makes Sense",
      "Thanks For Understanding"
    ],
    "Clarification": [
      "I Want To Ensure",
      "Does This Sound",
      "Help Me Understand",
      "So What You Are Saying",
      "Let Me Rephrase",
      "I Would Like To Ensure"
    ],
    "Encouraging": [
      "I Realize That This Situation",
      "Not Fun",
      "Has Been Difficult For You",
      "I Certainly Do Apologize",
      "It Is Upsetting",
      "Not Pleasant"
    ],
    "Acknowledgement": [
      "That Is Frustrating",
      "Were In Your Shoes",
      "Imagine How Stressful",
      "I Hear What You Are Saying",
      "Would Be Frustrated",
      "Is Horrible"
    ],
    "Personal Connection": [
      "Understand The Impact",
      "Am Glad You Are Ok",
      "Hope You Feel Better Soon",
      "Concerns Are Completely Valid",
      "Concerns Are Valid",
      "Glad Happy Are Okay Not Hurt Injured"
    ],
    "Follow Up": [
      "Personally Follow Up",
      "Based On What You Told Me",
      "The Specific Issue",
      "Based On What You Have Told Me",
      "Have You Experienced",
      "What Cause"
    ],
    "Dynamic": [
      "Need To Transfer",
      "Walk You Through",
      "Makes Sense",
      "I Agree With",
      "Thanks For Your Understanding",
      "Walk Me Through"
    ],
    "Proactive": [
      "Walk Me Through",
      "It Was Nice Talking",
      "Describe The",
      "It Was Great Talking",
      "Would Like To Explore",
      "It Was Great Talking To You"
    ],
    "Positivity": [
      "Gladly",
      "Thanks For Reaching Out",
      "Delighted",
      "Congratulations",
      "Brilliant",
      "Incredible"
    ],
    "Politeness": [
      "Let Us Get Started",
      "Appreciate Your Kind Patience",
      "That Is A Possibility",
      "So Glad To Help You",
      "Value Your Trust",
      "Let’S Get Started"
    ],
    "Phrasing": [
      "That Is A Great",
      "I Totally Agree",
      "Totally Help",
      "Certainly Can",
      "Exactly Right",
      "Absolutely Can"
    ],
    "Reassurance": [
      "Explaining The Situation",
      "Am Confident",
      "Can Take Care Of That",
      "Value Your Feedback",
      "Will Make It Right",
      "Can Make It Right"
    ],
    "Empowerment": [
      "Best Solution For You",
      "Going To Take Care Of",
      "Can Take Care Of",
      "In Good Hands",
      "I Can Definitely Do That",
      "Make This Right"
    ],
    "Resourcefulness": [
      "Explore The Options",
      "Explore Options",
      "Solution That Works",
      "Here To Answer",
      "Am Going To Help With",
      "We Have A Few Options"
    ],
    "Solution": [
      "Send Email Confirmation",
      "Find The Best Resolution",
      "Has Been Applied",
      "Let Us Figure",
      "Am Going To Take Care Of This",
      "Have Credited"
    ],
    "Implementation": [
      "Can Count On Me",
      "Can Fix That",
      "Swift Resolution",
      "Resolve Promptly",
      "Fix Quick",
      "Wrap This Up Quickly"
    ],
    "Issue Identification": [
      "You Have Options",
      "If Happens Again",
      "Have I Missed Anything",
      "I Have Options",
      "You Might Want To Try",
      "An Alternative Is"
    ]
};

const positiveFinalHighValuePhrases = {
    "Reflective": [
      "Clear Understanding",
      "We Have Heard",
      "What I Am Hearing",
      "Hear More Details",
      "Hearing Correctly",
      "I Recognize The Concern"
    ],
    "Confirmation": [
      "I Understand Now",
      "Is Understandable",
      "Completely Understandable",
      "Sharing  With Me",
      "Sharing That With Me",
      "Great Question"
    ],
    "Clarification": [
      "Understand Your Needs",
      "Will Tell More",
      "Sound So Far",
      "To Make Sure I Hear",
      "Would Tell More",
      "I Understand You Are Having Trouble With"
    ],
    "Encouraging": [
      "My Sympathy",
      "I Realize This Situation",
      "I Realize The Situation",
      "Sounds Upsetting",
      "Not Surprising Or Makes Sense That And Frustration Or Upset",
      "I Realize This Is A Difficult Situation"
    ],
    "Acknowledgement": [
      "Hear Your Frustration",
      "Is Scary",
      "That Is Awful",
      "That Is Awful",
      "Sounds Awful",
      "Sounds Really Tough"
    ],
    "Personal Connection": [
      "Could Only Imagine",
      "Recognize The Concern",
      "Would Be Concerned Too",
      "Hope They Feel",
      "Am Glad You Are Okay",
      "Am Glad You Are Not Hurt"
    ],
    "Follow Up": [
      "What Might Be Causing",
      "Based On Your Feedback",
      "Identify The Root Cause",
      "It Seems Like The Issue Might Be",
      "Found The Root Cause",
      "Will Check To Ensure"
    ],
    "Dynamic": [
      "Get How You",
      "Thank You For Your Concern",
      "Get Why You",
      "See Why You Did That",
      "See Why You Thought"
    ],
    "Proactive": [
      "Love To Hear Your Thoughts",
      "Describe What",
      "To Prevent This From Happening",
      "Enjoyed Talking To You",
      "Elaborate Further"
    ],
    "Positivity": [
      "Delightful",
      "Thank You For Highlighting",
      "Thank You For Highlighting",
      "Marvelous",
      "Superb",
      "Thank You For Bringing To"
    ],
    "Politeness": [],
    "Phrasing": [
      "Let Me Guide You Through",
      "To Be Of Assistance",
      "I Am Positive",
      "Glad To Guide You",
      "Glad I Was Of Help",
      "We Totally Agree"
    ],
    "Reassurance": [
      "Will Make This Right",
      "Can Make This Right",
      "Will Pass On Your Feedback",
      "Can Go Through That With You"
    ],
    "Empowerment": [
      "You Are In The Right Place",
      "Is What I Am Here For",
      "Let Me Get To Work For You",
      "Definitely Take Care Of That",
      "Please Allow Me To Investigate",
      "Let Me For You"
    ],
    "Resourcefulness": [
      "Explore Our Options",
      "Here Are Some Options",
      "Here Are Some Steps"
    ],
    "Solution": [
      "Is Now Done",
      "Explore Solutions",
      "Processed Full Refund",
      "Have Been Credited",
      "Address",
      "Ensure This Is Resolved"
    ],
    "Implementation": [
      "Will Get It Right",
      "Find The Best One",
      "Resolve Quickly",
      "Make Sure Everything Is Working",
      "Clear Up"
    ],
    "Issue Identification": [
      "Will Solve Your Problem",
      "Will Solve Your Issue",
      "In The Future You Might",
      "In The Future You Could",
      "Explain The Steps",
      "An Alternative Would Be"
    ]
};

const positiveUltimateHighValuePhrases = {
    "Reflective": [
      "Understand What You Said Correctly"
    ],
    "Confirmation": [
      "Is That Accurate",
      "Making Sense",
      "Understand Exactly",
      "Let Me Find Out For You",
      "Great Question"
    ],
    "Clarification": [
      "So Far Does"
    ],
    "Encouraging": [
      "Trying To Manage This"
    ],
    "Acknowledgement": [
      "Understand Feel",
      "Sounds Scary",
      "I Would Be Just As Frustrated As",
      "It Sounds Like You Are Frustrated"
    ],
    "Personal Connection": [
      "Am Glad You Were Not Hurt"
    ],
    "Follow Up": [
      "Identified The Root Cause",
      "We Will Check To Ensure"
    ],
    "Dynamic": [],
    "Proactive": [
      "Enjoyed Talking With You",
      "Options For Your Property"
    ],
    "Positivity": [
      "Phenomenal",
      "Marvellous"
    ],
    "Politeness": [],
    "Phrasing": [
      "Committed To Support"
    ],
    "Reassurance": [],
    "Empowerment": [
      "Personally Take Care",
      "Ensure Your Needs",
      "Going To Help You Get",
      "Absolutely Take Care Of That"
    ],
    "Resourcefulness": [],
    "Solution": [
      "We Will Address This",
      "We Have Placed",
      "Let Me Find The Best Resolution",
      "Will Be Simple"
    ],
    "Implementation": [],
    "Issue Identification": [
      "Will Resolve Your Problem",
      "Next Time This Happens",
      "Here Is What Can Do For You"
    ]
};

// Additional high-value phrases data for negative page
const negativeAdditionalHighValuePhrases = {
    "Non-committal": [
      "Will See What Happens",
      "No Confidence",
      "Do Not Quote Me",
      "I Wish I Knew",
      "Do Not Have A Solution",
      "Do Not Really Have An Idea"
    ],
    "Knowledge": [
      "Do Not Have An Answer",
      "I Am Stuck",
      "Completely Lost",
      "I Am Uncertain",
      "Do Not Have Knowledge",
      "I Have Forgotten"
    ],
    "Non-Specific": [
      "I Am In The Dark",
      "Not A Clue",
      "Zero Idea",
      "Zero Clue"
    ],
    "Jargon": [
      "Ancillary Services",
      "Global Distribution System",
      "Payment Assist",
      "Intermediary",
      "Egencia",
      "P And R"
    ],
    "Vagueness": [
      "Probably Be Fine",
      "It Should Arrive Soon"
    ],
    "Ambiguity": [],
    "Blame": [
      "Your Fault",
      "I do Not Get It",
      "Do you Understand",
      "Not My Fault",
      "Hang Up",
      "Disrespectful"
    ],
    "Understanding": [
      "Talking So Fast",
      "Cut Me Off",
      "Will Not Be Doing That",
      "Do Not Rush Me",
      "Idiotic",
      "Speak Over Me"
    ],
    "Profanity": [],
    "Avoidance": [
      "Do Not Have Time",
      "Are So Dumb",
      "Computer",
      "I do Not Like",
      "Other Agent Was Wrong",
      "App"
    ],
    "Passing Responsibility/\r\nResponse": [
      "You Will Need To Contact Another",
      "I Am Not Good Enough",
      "We Are Short Staffed",
      "I Did Not Get Trained On That",
      "I Have Not Been Here Long",
      "Just Visit Our Website Instead"
    ],
    "Defensiveness": [
      "Stop Talking",
      "You Are Mean",
      "You Are Rude",
      "You Are Being Rude",
      "Quiet Down",
      "If You Would Listen"
    ]
};

const negativeFinalHighValuePhrases = {
    "Non-committal": [
      "Do Not Have A Solution",
      "I Do Not Have Advice",
      "This Might Be Resolved",
      "Do Not Have A Answer"
    ],
    "Knowledge": [
      "Cannot Find",
      "I Am Unfamiliar",
      "I Am Unclear",
      "I D K",
      "Not For Certain",
      "Idk"
    ],
    "Non-Specific": [],
    "Jargon": [
      "Net Rate Agreement",
      "Segment Fare"
    ],
    "Vagueness": [],
    "Ambiguity": [],
    "Blame": [
      "Excuse You",
      "Get This Straight",
      "Not What I Said",
      "You Are Incorrect",
      "Do Not Assume",
      "Do Not Interrupt"
    ],
    "Understanding": [
      "Stupid",
      "Missing The Point",
      "I Know What I Am Talking About",
      "Do You Not Understand",
      "If You Do Not Stop",
      "You Do Not Understand"
    ],
    "Profanity": [],
    "Avoidance": [
      "Dumb"
    ],
    "Passing Responsibility/\r\nResponse": [],
    "Defensiveness": [
      "Would You Listen To Me",
      "You Are Talking Too Much",
      "Already Told You What To Do",
      "Why Are You Not Getting This",
      "You Are Being Unreasonable"
    ]
};

const negativeUltimateHighValuePhrases = {
    "Non-committal": [],
    "Knowledge": [
      "I Am Completely Lost",
      "Unfamiliar To Me",
      "Unclear To Me"
    ],
    "Non-Specific": [],
    "Jargon": [],
    "Vagueness": [],
    "Ambiguity": [],
    "Blame": [
      "You Will Not Understand",
      "Wrong Assumption",
      "You Should Know This",
      "You Not Getting",
      "Should Have Known Better"
    ],
    "Understanding": [
      "You Are Killing Me",
      "You Are Missing The Point",
      "Use Your Brain",
      "Did You Read The Confirmation"
    ],
    "Profanity": [],
    "Avoidance": [],
    "Passing Responsibility/\r\nResponse": [],
    "Defensiveness": []
};

let searchTerm = '';

function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function handleSearch(value) {
    searchTerm = value.trim().toLowerCase();
    generateTable();
}

function phraseMatchesSearch(phrases) {
    if (!searchTerm) return true;
    return phrases.some(phrase => phrase.toLowerCase().includes(searchTerm));
}

function generateTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    // Get current data sets based on page
    const additionalHighValuePhrases = currentPage === 'positive' ? positiveAdditionalHighValuePhrases : negativeAdditionalHighValuePhrases;
    const finalHighValuePhrases = currentPage === 'positive' ? positiveFinalHighValuePhrases : negativeFinalHighValuePhrases;
    const ultimateHighValuePhrases = currentPage === 'positive' ? positiveUltimateHighValuePhrases : negativeUltimateHighValuePhrases;

    Object.entries(currentAssessmentData).forEach(([attributeName, attributeData]) => {
        const subAttributeKeys = Object.keys(attributeData.subAttributes);
        
        // Filter sub-attributes based on search first
        const filteredSubAttributes = subAttributeKeys.filter(subAttrName => {
            const subAttr = attributeData.subAttributes[subAttrName];
            
            // Gather all phrases for search
            const allPhrases = [
                ...(subAttr.phrases || []),
                ...(subAttr.highValuePhrases || []),
                ...(additionalHighValuePhrases[subAttrName] || []),
                ...(finalHighValuePhrases[subAttrName] || []),
                ...(ultimateHighValuePhrases[subAttrName] || [])
            ];
            
            // Return true if no search term or if phrases match search
            return !searchTerm || phraseMatchesSearch(allPhrases);
        });

        // Only create rows if there are filtered sub-attributes
        if (filteredSubAttributes.length > 0) {
            let firstRow = true;

            filteredSubAttributes.forEach((subAttrName, index) => {
                const subAttr = attributeData.subAttributes[subAttrName];
                const row = document.createElement('tr');

                // Attribute cell (spans multiple rows) - only on first visible row
                if (firstRow) {
                    const attributeCell = document.createElement('td');
                    attributeCell.className = 'attribute-cell';
                    attributeCell.textContent = attributeName;
                    attributeCell.rowSpan = filteredSubAttributes.length; // Use filtered count
                    row.appendChild(attributeCell);

                    // Score cell (spans multiple rows) - only on first visible row
                    const scoreCell = document.createElement('td');
                    scoreCell.className = 'score-cell' + (currentPage === 'negative' ? ' negative' : '');
                    scoreCell.textContent = attributeData.score;
                    scoreCell.rowSpan = filteredSubAttributes.length; // Use filtered count
                    row.appendChild(scoreCell);

                    firstRow = false;
                }

                // Sub-attribute cell
                const subAttrCell = document.createElement('td');
                subAttrCell.className = 'sub-attribute-cell';
                subAttrCell.textContent = subAttrName;
                row.appendChild(subAttrCell);

                // Points cell
                const pointsCell = document.createElement('td');
                pointsCell.className = 'points-cell' + (currentPage === 'negative' ? ' negative' : '');
                pointsCell.textContent = subAttr.points;
                row.appendChild(pointsCell);

                // Phrase columns
                const phraseCells = [];
                
                // Column 1: Basic phrases
                phraseCells.push(createPhraseCell(subAttr.phrases));
                
                // Column 2: High value phrases
                phraseCells.push(createPhraseCell(subAttr.highValuePhrases, true));
                
                // Column 3: Additional high value phrases
                phraseCells.push(createPhraseCell(additionalHighValuePhrases[subAttrName] || [], true));
                
                // Column 4: Final high value phrases
                phraseCells.push(createPhraseCell(finalHighValuePhrases[subAttrName] || [], true));
                
                // Column 5: Ultimate high value phrases
                phraseCells.push(createPhraseCell(ultimateHighValuePhrases[subAttrName] || [], true));

                phraseCells.forEach(cell => row.appendChild(cell));
                tableBody.appendChild(row);
            });
        }
    });
}

function createPhraseCell(phrases, isHighValue = false) {
    const cell = document.createElement('td');
    cell.className = `phrase-cell ${isHighValue ? 'high-value' : ''}`;
    
    if (phrases && phrases.length > 0) {
        // Filter phrases based on search if there's a search term
        const filteredPhrases = searchTerm ? 
            phrases.filter(phrase => phrase.toLowerCase().includes(searchTerm)) : 
            phrases;
            
        if (filteredPhrases.length > 0) {
            const ul = document.createElement('ul');
            filteredPhrases.forEach(phrase => {
                const li = document.createElement('li');
                li.innerHTML = searchTerm ? highlightText(phrase, searchTerm) : phrase;
                ul.appendChild(li);
            });
            cell.appendChild(ul);
        }
    }
    
    return cell;
}

function switchPage(page) {
    currentPage = page;
    const positiveBtn = document.getElementById('positiveBtn');
    const negativeBtn = document.getElementById('negativeBtn');
    // No longer update pageIndicator text
    if (page === 'positive') {
        currentAssessmentData = positiveAssessmentData;
        positiveBtn.classList.add('active');
        negativeBtn.classList.remove('active');
    } else {
        currentAssessmentData = negativeAssessmentData;
        negativeBtn.classList.add('active');
        positiveBtn.classList.remove('active');
    }
    generateTable();
}

function exportData() {
    const dataToExport = {
        positive: positiveAssessmentData,
        negative: negativeAssessmentData,
        currentPage: currentPage
    };
    const dataStr = JSON.stringify(dataToExport, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'assessment_data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function loadSampleData() {
    // This function can load different datasets
    alert('Sample data loaded! You can modify the positiveAssessmentData and negativeAssessmentData objects to load different datasets.');
}

function addNewRow() {
    // This would open a form to add new assessment criteria
    alert('Add new row functionality would open a form to add new assessment criteria.');
}

// Initialize the table when page loads
document.addEventListener('DOMContentLoaded', function() {
    generateTable();
});

// API for developers to easily update content
window.AssessmentAPI = {
    // Add new attribute to positive or negative data
    addAttribute: function(name, score, subAttributes, pageType = 'positive') {
        const targetData = pageType === 'positive' ? positiveAssessmentData : negativeAssessmentData;
        targetData[name] = {
            score: score,
            subAttributes: subAttributes
        };
        if (currentPage === pageType) {
            generateTable();
        }
    },
    
    // Update existing attribute
    updateAttribute: function(name, updates, pageType = 'positive') {
        const targetData = pageType === 'positive' ? positiveAssessmentData : negativeAssessmentData;
        if (targetData[name]) {
            Object.assign(targetData[name], updates);
            if (currentPage === pageType) {
                generateTable();
            }
        }
    },
    
    // Add phrases to sub-attribute
    addPhrases: function(attribute, subAttribute, phrases, isHighValue = false, pageType = 'positive') {
        const targetData = pageType === 'positive' ? positiveAssessmentData : negativeAssessmentData;
        if (targetData[attribute] && targetData[attribute].subAttributes[subAttribute]) {
            const targetArray = isHighValue ? 
                targetData[attribute].subAttributes[subAttribute].highValuePhrases :
                targetData[attribute].subAttributes[subAttribute].phrases;
            targetArray.push(...phrases);
            if (currentPage === pageType) {
                generateTable();
            }
        }
    },
    
    // Get current data
    getData: function(pageType = 'current') {
        if (pageType === 'current') {
            return currentAssessmentData;
        } else if (pageType === 'positive') {
            return positiveAssessmentData;
        } else if (pageType === 'negative') {
            return negativeAssessmentData;
        } else {
            return { positive: positiveAssessmentData, negative: negativeAssessmentData };
        }
    },
    
    // Load new data
    loadData: function(newData, pageType = 'positive') {
        if (pageType === 'positive') {
            Object.assign(positiveAssessmentData, newData);
        } else {
            Object.assign(negativeAssessmentData, newData);
        }
        if (currentPage === pageType) {
            generateTable();
        }
    },
    
    // Switch between pages programmatically
    switchPage: function(page) {
        switchPage(page);
    }
};
