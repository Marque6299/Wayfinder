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
                    "I Understand You",
                    "You Are Saying"
                ],
                highValuePhrases: [
                    "Let Me Confirm",
                    "To Repeat",
                    "Let Me Go Over",
                    "It Sounds Like"
                ]
            },
            "Confirmation": {
                points: 2,
                phrases: [
                    "Thank You Confirming",
                    "Am I Correct",
                    "I Confirm",
                    "Yes That Is Correct"
                ],
                highValuePhrases: [
                    "Is This Correct",
                    "Thank You Sharing",
                    "Thank You For Understanding",
                    "Thank You For Sharing"
                ]
            },
            "Clarification": {
                points: 4,
                phrases: [
                    "You You Provide",
                    "You Are Referring To",
                    "Want To Make Sure",
                    "Can You Repeat"
                ],
                highValuePhrases: [
                    "Could You Provide",
                    "Does That Sound",
                    "To Make Sure I Understand",
                    "Would You Provide"
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
        "Hearing Correctly",
        "I Recognize The Concern"
    ],
    "Confirmation": [
        "Sharing With Me",
        "Sharing That With Me",
        "Great Question",
        "Understand Your Needs"
    ],
    "Clarification": [
        "Will Tell More",
        "Would Tell More",
        "I Understand You Are Having Trouble With"
    ]
};

const positiveUltimateHighValuePhrases = {
    "Reflective": [
        "Understand What You Said Correctly"
    ],
    "Confirmation": [
        "I Understand Now",
        "Let Me Find Out For You",
        "Great Questions"
    ],
    "Clarification": [
        "So Far Does",
        "Is That Accurate"
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
                scoreCell.className = 'score-cell';
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
            pointsCell.className = 'points-cell';
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
            li.textContent = phrase;
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
    const pageIndicator = document.getElementById('pageIndicator');
    
    if (page === 'positive') {
        currentAssessmentData = positiveAssessmentData;
        positiveBtn.classList.add('active');
        negativeBtn.classList.remove('active');
        pageIndicator.textContent = 'Active Listening Assessment';
    } else {
        currentAssessmentData = negativeAssessmentData;
        negativeBtn.classList.add('active');
        positiveBtn.classList.remove('active');
        pageIndicator.textContent = 'Uncertainty Assessment';
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