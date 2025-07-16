// Data structure for easy content management
const positiveAssessmentData = {
    "Active Listening": {
        score: 8,
        subAttributes: {
            "Reflective": {
                points: 2,
                phrases: [
                    "To Confirm",
                    "What I Can Do",
                    "You Mentioned",
                    "On The Same Page",
                    "I Understand You",
                    "You Are Saying"
                ],
                highValuePhrases: [
                    "Let Me Confirm",
                    "To Repeat",
                    "To Summarize",
                    "To Reap",
                    "Let Me Go Over",
                    "It Sounds Like"
                ]
            },
            "Confirmation": {
                points: 2,
                phrases: [
                    "Thank You Confirming",
                    "Thanks Confirming",
                    "Understand Concern",
                    "Is That Right",
                    "Am I Correct",
                    "I Confirm",
                    "Yes That's Correct"
                ],
                highValuePhrases: [
                    "Is That Correct",
                    "Thanks Sharing",
                    "Thanks For Sharing",
                    "Thank You Sharing",
                    "Thank You For Understanding",
                    "Good Question",
                    "Makes Sense",
                    "Thanks For Understanding"
                ]
            },
            "Clarification": {
                points: 4,
                phrases: [
                    "Can You Provide",
                    "You Are Referring To",
                    "To Clarify",
                    "Do You Need",
                    "Want To Make Sure",
                    "Can You Repeat"
                ],
                highValuePhrases: [
                    "Could You Provide",
                    "Does That Sound",
                    "Tell Me More",
                    "Help Me Understand",
                    "So What You Are Saying",
                    "To Make Sure I Understand",
                    "Let Me Rephrase",
                    "Would You Provide"
                ]
            }
        }
    },
    "Empathy": {
        score: 7,
        subAttributes: {
            "Encouraging": {
                points: 2,
                phrases: [
                    "I Am Sorry",
                    "Really Sorry",
                    "Sorry To Hear",
                    "I Do Apologize",
                    "Sure I Can",
                    "Do Not Have To Worry"
                ],
                highValuePhrases: [
                    "I Hear Your Loss",
                    "Regret Inconvenience Issue",
                    "Apologize About That",
                    "My Condolences",
                    "Feelings Are Valid",
                    "Understand Issue"
                ]
            },
            "Acknowledgement": {
                points: 2,
                phrases: [
                    "I Understand",
                    "Understand Issue",
                    "How Frustrating",
                    "Understand Frustrate",
                    "I Understand Your Frustration",
                    "I Understand Where You Are Coming From",
                    "Here To Assist"
                ],
                highValuePhrases: [
                    "I Completely Understand Your Frustration",
                    "You Are Going Through This",
                    "It Is Frustrating Sounds Frustrating",
                    "I Understand How You Are Feeling",
                    "That Is Terrible",
                    "I Know It Is Frustrating",
                    "Feel The Same Way"
                ]
            },
            "Personal Connection": {
                points: 3,
                phrases: [
                    "Can Imagine",
                    "Hope Everything",
                    "Hope Everything Is Important To You",
                    "Work Together",
                    "Let Me Check",
                    "I Am Checking"
                ],
                highValuePhrases: [
                    "Can Imagine",
                    "Hope You Feel",
                    "How Inconvenience",
                    "Not Alone",
                    "Let Me Take A Look",
                    "Keep You Updated"
                ]
            }
        }
    },
    "Engagement": {
        score: 9,
        subAttributes: {
            "Follow Up": {
                points: 2,
                phrases: [
                    "Let Me Check",
                    "I Am Checking",
                    "I Can Check",
                    "As Soon As Possible",
                    "Check For You",
                    "Will Follow-Up",
                    "Let Me See"
                ],
                highValuePhrases: [
                    "Let Me Take A Look",
                    "Keep You Updated",
                    "We Can Check",
                    "Checking For You",
                    "We Will Follow-Up",
                    "You Are Having Trouble With",
                    "Thanks For Waiting"
                ]
            },
            "Dynamic": {
                points: 5,
                phrases: [
                    "Thank You For Your Patience",
                    "Appreciate Your Patience",
                    "Thank You For Waiting",
                    "Thanks For Your Patience",
                    "Thank You For Holding"
                ],
                highValuePhrases: [
                    "Thank You For Your Time",
                    "Thanks For Your Understanding",
                    "Thanks For Holding",
                    "Appreciate Your Understanding",
                    "Going To Transfer You",
                    "Good For You"
                ]
            },
            "Proactive": {
                points: 2,
                phrases: [
                    "Good To Hear",
                    "More Details",
                    "Quickly As Possible",
                    "Tell Me More",
                    "What Would You Like",
                    "Happy To Hear That"
                ],
                highValuePhrases: [
                    "Further Details",
                    "Explain More",
                    "Elaborate More",
                    "More Detail",
                    "Further Detail",
                    "Glad",
                    "Great News"
                ]
            }
        }
    },
    "Positive Language": {
        score: 14,
        subAttributes: {
            "Positivity": {
                points: 6,
                phrases: [
                    "Perfect",
                    "Thank You For Reaching Out",
                    "Absolutely",
                    "Certainly",
                    "Can Do That",
                    "Good News",
                    "Happy To",
                    "Appreciate Your Patience"
                ],
                highValuePhrases: [
                    "Great News",
                    "Amazing",
                    "Delighted",
                    "Thank You For Bringing This",
                    "Excellent",
                    "Fantastic",
                    "Phenomenal",
                    "Marvelous"
                ]
            },
            "Politeness": {
                points: 4,
                phrases: [
                    "Take Your Time",
                    "Glad I Could",
                    "There Might Be",
                    "Appreciate Your Understanding",
                    "I Totally",
                    "Would Be Glad",
                    "Would Be Glad To",
                    "That Is Possible"
                ],
                highValuePhrases: [
                    "Appreciate Your Kind Understanding",
                    "Let's Get Started",
                    "Appreciate Your Kind Patience",
                    "That Is A Possibility",
                    "So Glad To Help You",
                    "Value Your Trust"
                ]
            },
            "Phrasing": {
                points: 4,
                phrases: [
                    "Happy To Help",
                    "Pleasure To",
                    "Be Happy To",
                    "Happy To Help You",
                    "That's Great",
                    "I Agree",
                    "Absolutely Correct"
                ],
                highValuePhrases: [
                    "I Would Love To",
                    "That Is A Great",
                    "Pleasure To Help",
                    "Totally Agree",
                    "Would Be Happy To",
                    "I Am Sure",
                    "Certainly Correct"
                ]
            }
        }
    },
    "Advocacy": {
        score: 13,
        subAttributes: {
            "Reassurance": {
                points: 5,
                phrases: [
                    "I Can Assist",
                    "Do My Best",
                    "Rest Assured",
                    "I Got You",
                    "Do That For You",
                    "Nothing To Worry About"
                ],
                highValuePhrases: [
                    "Find A Solution",
                    "Will Do Everything",
                    "You Are Correct",
                    "We Can Assist",
                    "Will Take Care of This",
                    "Get This Sorted Out"
                ]
            },
            "Empowerment": {
                points: 5,
                phrases: [
                    "Here To Help",
                    "Could You Please Provide",
                    "Here For You",
                    "Take Care Of",
                    "Let Me Help You With",
                    "Could You Please Share"
                ],
                highValuePhrases: [
                    "Will help You Get",
                    "Will Do Everything I Can",
                    "Take Care Of That",
                    "Let Me Look Into This",
                    "I Will Definitely Do",
                    "Come To The Right Place"
                ]
            },
            "Resourcefulness": {
                points: 3,
                phrases: [
                    "Look Into This",
                    "Will Look Into",
                    "They Will Help",
                    "They Can Help",
                    "Find A Solution",
                    "Handle This For You"
                ],
                highValuePhrases: [
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
        score: 9,
        subAttributes: {
            "Solution": {
                points: 5,
                phrases: [
                    "Cancelled",
                    "Processed",
                    "Resolved",
                    "Self Service",
                    "Have Successfuly",
                    "Good To Go"
                ],
                highValuePhrases: [
                    "What Can I Do For You",
                    "Solve",
                    "Is Complete",
                    "Has Been Changed",
                    "Fix",
                    "Find A Solution",
                ]
            },
            "Implementation": {
                points: 2,
                phrases: [
                    "We Are Going To",
                    "Complete That",
                    "Finished",
                    "Next Step",
                    "To Create",
                    "Can Create"
                ],
                highValuePhrases: [
                    "Step By Step",
                    "Take Care Of This Right Away",
                    "Get It Right",
                    "We Can Fix",
                    "Can Figure Out",
                    "Did I Answer"
                ]
            },
            "Issue Identification": {
                points: 2,
                phrases: [
                    "In The Future",
                    "You Can Try",
                    "Another Option",
                    "An Alternate",
                    "Another Option Is",
                    "Will Find A Solution"
                ],
                highValuePhrases: [
                    "Will Resolve Your Issue",
                    "Did I Miss Everything",
                    "Will Solve It",
                    "will Resolve It",
                    "For Clarity",
                    "We Have Options"
                ]
            }
        }
    }  
};

const negativeAssessmentData = {
    "Uncertainty": {
        score: 12,
        subAttributes: {
            "Non-committal": {
                points: -2,
                phrases: [
                    "Not Sure",
                    "It Might Be",
                    "I Cannot Guarantee",
                    "There Is A Chance",
                    "No Idea",
                    "Can Not Answer"
                ],
                highValuePhrases: [
                    "I Am Confused",
                    "I Am Sorry But I Cannot",
                    "I Am Not So Sure",
                    "I Will Try And Find Out",
                    "Can Not Figure",
                    "Do Not Have The Answer"
                ]
            },
            "Knowledge": {
                points: -4,
                phrases: [
                    "Do Not Know",
                    "I Forget",
                    "I Suppose",
                    "I Am Not Aware",
                    "I Am Having Trouble",
                    "Do Not Really Know",
                    "Do Not Have Access",
                    "Do Not Have Any Information"
                ],
                highValuePhrases: [
                    "Having Difficulty",
                    "Not Certain",
                    "I Would Not Know",
                    "Non Expert",
                    "Never Heard Of",
                    "I Am Struggling",
                    "Do Not Have An Answer",
                    "I Am Not Positive"
                ]
            },
            "Non-Specific": {
                points: -5,
                phrases: [
                    "You Might Have To",
                    "You May Have To",
                    "Do Not Have Information",
                    "No Clue"
                ],
                highValuePhrases: [
                    "Clueless",
                    "What I Think Happened",
                    "Not Positive",
                    "Possibly Will Be"
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
        "Understood Correctly",
        "I Hear Your Concern"
    ],
    "Confirmation": [
        "We Confirm",
        "Good Question",
        "Makes Sense",
        "Thanks For Understanding"
    ],
    "Clarification": [
        "I Want To Ensure",
        "Does This Sound",
        "Let Me Rephrase",
        "I Would Like To Ensure"
    ]
};

const positiveFinalHighValuePhrases = {
    "Reflective": [
        "Clear Understanding",
        "We Have Heard",
        "What I Am Hearing",
        "Hear More Details",
        "Understood Correctly",
        "Hearing Correctly",
        "I Recognize The Concern"
    ],
    "Confirmation": [
        "I Understand Now",
        "Is Understandable",
        "Making Sense",
        "Completely Understandable",
        "Understand Exactly",
        "Sharing With Me",
        "Sharing That With Me",
        "Great Question",
        "Understand Your Needs"
    ],
    "Clarification": [
        "Will Tell More",
        "Would Tell More",
        "Sound So Far",
        "To Make Sure I Hear",
        "I Understand You Are Having Trouble With"
    ]
};

const positiveUltimateHighValuePhrases = {
    "Reflective": [
        "Understand What You Said Correctly"
    ],
    "Confirmation": [
        "Let Me Find Out For You",
        "Great Question",
        "Is That Accurate"
    ],
    "Clarification": [
        "So Far Does"
    ]
};

// Additional high-value phrases data for negative page
const negativeAdditionalHighValuePhrases = {
    "Non-committal": [
        "Will See What Happens",
        "No Confidence",
        "Do Not Quote Me",
        "I What I Know",
        "Do Not Have A Solution",
        "Do Not Really Have An Idea"
    ],
    "Knowledge": [
        "Do Not Have An Answer",
        "I Am Stuck",
        "Completely Lost",
        "I Am Uncertain",
        "Do Not Have Knowledge",
        "I Have Forgotten",
        "I Am In The Dark"
    ],
    "Non-Specific": [
        "Not A Clue",
        "Zero Idea",
        "Zero Clue"
    ]
};

const negativeFinalHighValuePhrases = {
    "Non-committal": [
        "Do Not Have A Solution",
        "Do Not Have Advice",
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
    "Non-Specific": []
};

const negativeUltimateHighValuePhrases = {
    "Non-committal": [],
    "Knowledge": [
        "I Am Completely Lost",
        "Unfamiliar To Me",
        "Unclear Me"
    ],
    "Non-Specific": []
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
        let firstRow = true;

        subAttributeKeys.forEach((subAttrName, index) => {
            const subAttr = attributeData.subAttributes[subAttrName];

            // Gather all phrases for search
            const allPhrases = [
                ...(subAttr.phrases || []),
                ...(subAttr.highValuePhrases || []),
                ...((currentPage === 'positive' ? positiveAdditionalHighValuePhrases : negativeAdditionalHighValuePhrases)[subAttrName] || []),
                ...((currentPage === 'positive' ? positiveFinalHighValuePhrases : negativeFinalHighValuePhrases)[subAttrName] || []),
                ...((currentPage === 'positive' ? positiveUltimateHighValuePhrases : negativeUltimateHighValuePhrases)[subAttrName] || [])
            ];

            // Filter by search
            if (searchTerm && !phraseMatchesSearch(allPhrases)) {
                return;
            }

            const row = document.createElement('tr');

            // Attribute cell (spans multiple rows)
            if (firstRow) {
                const attributeCell = document.createElement('td');
                attributeCell.className = 'attribute-cell';
                attributeCell.textContent = attributeName;
                attributeCell.rowSpan = subAttributeKeys.length;
                row.appendChild(attributeCell);

                // Score cell (spans multiple rows)
                const scoreCell = document.createElement('td');
                scoreCell.className = 'score-cell' + (currentPage === 'negative' ? ' negative' : '');
                scoreCell.textContent = attributeData.score;
                scoreCell.rowSpan = subAttributeKeys.length;
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
    });
}

function createPhraseCell(phrases, isHighValue = false) {
    const cell = document.createElement('td');
    cell.className = `phrase-cell ${isHighValue ? 'high-value' : ''}`;
    
    if (phrases.length > 0) {
        const ul = document.createElement('ul');
        phrases.forEach(phrase => {
            const li = document.createElement('li');
            li.innerHTML = searchTerm ? highlightText(phrase, searchTerm) : phrase;
            ul.appendChild(li);
        });
        cell.appendChild(ul);
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
