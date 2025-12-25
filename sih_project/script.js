let currentLang = 'en';

        const translations = {
            en: {
                // UI Text
                headerTitle: '🩺 Sakha',
                headerSubtitle: 'Digital Health Friend',
                headerQuizTitle: 'Health Awareness Quiz',
                welcomeTitle: 'Welcome to Sakha Health Quiz',
                welcomeSubtitle: 'Test your knowledge & learn health facts while having fun!',
                questionsCount: '10 Questions',
                noTimeLimit: 'No Time Limit',
                getCertified: 'Get Certified',
                startButton: 'Start Quiz',
                questionText: 'Question',
                scoreText: 'Score:',
                nextButton: 'Next Question',
                viewResultsButton: 'View Results',
                explanationTitle: 'Explanation',
                quizCompleted: 'Quiz Completed!',
                yourPerformance: 'Your Performance',
                correctAnswers: 'Correct',
                incorrectAnswers: 'Incorrect',
                takeAgainButton: 'Take Quiz Again',
                shareButton: 'Share Results',
                footerText: '© 2025 Sakha - AI Health Quiz | Improving Health Awareness',
                perfectScoreMessage: 'Excellent! You have outstanding knowledge about health and disease prevention.',
                greatScoreMessage: 'Great job! You have good health awareness. Keep learning to improve further.',
                goodScoreMessage: 'Good effort! There\'s room for improvement in your health knowledge.',
                needsImprovementMessage: 'Keep learning! Understanding health basics is important for everyone.',
                copyMessage: 'Results copied to clipboard! Share it with your friends.',
                // Quiz Data
                quizQuestions: [
                    { question: "How many glasses of water should an average adult drink per day?", options: ["4-5 glasses", "6-7 glasses", "8-10 glasses", "12-15 glasses"], explanation: "Adults should drink 8-10 glasses (about 2-2.5 liters) of water daily to maintain proper hydration and support bodily functions.", correct: 2, icon: "fas fa-tint" },
                    { question: "What is the most common symptom of dengue fever?", options: ["Continuous cough", "High fever with headache", "Stomach pain", "Skin rash only"], explanation: "Dengue fever typically starts with sudden onset of high fever (104°F) accompanied by severe headache, especially behind the eyes.", correct: 1, icon: "fas fa-thermometer-half" },
                    { question: "How often should you wash your hands to prevent infections?", options: ["Once a day", "Only before meals", "Frequently throughout the day", "Only when visibly dirty"], explanation: "Regular handwashing throughout the day, especially before eating, after using the bathroom, and after touching public surfaces, is crucial for preventing infections.", correct: 2, icon: "fas fa-hands-wash" },
                    { question: "Which vitamin is primarily obtained from sunlight exposure?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], explanation: "Vitamin D is synthesized in the skin when exposed to UVB rays from sunlight. It's essential for bone health and immune function.", correct: 3, icon: "fas fa-sun" },
                    { question: "What is the recommended duration for washing hands with soap?", options: ["5-10 seconds", "15-20 seconds", "20-30 seconds", "1-2 minutes"], explanation: "Washing hands with soap for at least 20-30 seconds ensures effective removal of germs and bacteria.", correct: 2, icon: "fas fa-stopwatch" },
                    { question: "Which of these is a common symptom of malaria?", options: ["Persistent dry cough", "Recurring fever with chills", "Severe headache only", "Skin discoloration"], explanation: "Malaria typically presents with recurring fever, chills, and sweating in cycles, often accompanied by headache and fatigue.", correct: 1, icon: "fas fa-bug" },
                    { question: "How many hours of sleep do adults need for optimal health?", options: ["4-5 hours", "6-7 hours", "7-9 hours", "10-12 hours"], explanation: "Adults need 7-9 hours of quality sleep per night for optimal physical and mental health, immune function, and cognitive performance.", correct: 2, icon: "fas fa-bed" },
                    { question: "What is the best way to prevent the spread of respiratory infections?", options: ["Taking antibiotics regularly", "Covering mouth when coughing/sneezing", "Avoiding all social contact", "Drinking hot water only"], explanation: "Covering your mouth and nose when coughing or sneezing, preferably with a tissue or elbow, prevents respiratory droplets from spreading infections.", correct: 1, icon: "fas fa-head-side-mask" },
                    { question: "Which food group is most important for building and repairing body tissues?", options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"], explanation: "Proteins are essential for building, maintaining, and repairing body tissues, including muscles, organs, and immune system components.", correct: 1, icon: "fas fa-drumstick-bite" },
                    { question: "What is the primary cause of diabetes Type 2?", options: ["Viral infection", "Genetic factors only", "Lifestyle factors and genetics", "Lack of exercise only"], explanation: "Type 2 diabetes is primarily caused by a combination of lifestyle factors (diet, physical activity, weight) and genetic predisposition.", correct: 2, icon: "fas fa-heartbeat" },
                ],
                healthTips: [
                    "Regular exercise for just 30 minutes a day can significantly reduce the risk of chronic diseases.",
                    "Eating a variety of colorful fruits and vegetables provides essential nutrients and antioxidants.",
                    "Stress management through meditation or deep breathing can improve both mental and physical health.",
                    "Regular health check-ups can help detect and prevent serious health conditions early.",
                    "Maintaining good posture while working can prevent back pain and improve overall well-being.",
                    "Limiting processed foods and sugar intake can help maintain a healthy weight and energy levels.",
                    "Getting adequate sleep is as important as diet and exercise for maintaining good health.",
                    "Staying socially connected with friends and family contributes to better mental health and longevity."
                ]
            },
            or: {
                // UI Text
                headerTitle: '🩺 ସଖା',
                headerSubtitle: 'ଡିଜିଟାଲ୍ ସ୍ୱାସ୍ଥ୍ୟ ବନ୍ଧୁ',
                headerQuizTitle: 'ସ୍ୱାସ୍ଥ୍ୟ ସଚେତନତା କୁଇଜ୍',
                welcomeTitle: 'ସଖା ସ୍ୱାସ୍ଥ୍ୟ କୁଇଜ୍ କୁ ସ୍ୱାଗତ',
                welcomeSubtitle: 'ଆପଣଙ୍କ ଜ୍ଞାନ ପରୀକ୍ଷା କରନ୍ତୁ ଏବଂ ମଜା କରୁଥିବା ସମୟରେ ସ୍ୱାସ୍ଥ୍ୟ ସମ୍ବନ୍ଧୀୟ ତଥ୍ୟ ଶିଖନ୍ତୁ!',
                questionsCount: '୧୦ଟି ପ୍ରଶ୍ନ',
                noTimeLimit: 'କୌଣସି ସମୟ ସୀମା ନାହିଁ',
                getCertified: 'ପ୍ରମାଣପତ୍ର ପାଆନ୍ତୁ',
                startButton: 'କୁଇଜ୍ ଆରମ୍ଭ କରନ୍ତୁ',
                questionText: 'ପ୍ରଶ୍ନ',
                scoreText: 'ସ୍କୋର:',
                nextButton: 'ପରବର୍ତ୍ତୀ ପ୍ରଶ୍ନ',
                viewResultsButton: 'ଫଳାଫଳ ଦେଖନ୍ତୁ',
                explanationTitle: 'ବ୍ୟାଖ୍ୟା',
                quizCompleted: 'କୁଇଜ୍ ସମାପ୍ତ ହେଲା!',
                yourPerformance: 'ଆପଣଙ୍କ ପ୍ରଦର୍ଶନ',
                correctAnswers: 'ଠିକ୍ ଉତ୍ତର',
                incorrectAnswers: 'ଭୁଲ ଉତ୍ତର',
                takeAgainButton: 'କୁଇଜ୍ ପୁଣି ଥରେ ନିଅନ୍ତୁ',
                shareButton: 'ଫଳାଫଳ ସେୟାର କରନ୍ତୁ',
                footerText: '© 2025 ସଖା - AI ସ୍ୱାସ୍ଥ୍ୟ କୁଇଜ୍ | ସ୍ୱାସ୍ଥ୍ୟ ସଚେତନତା ବୃଦ୍ଧି କରନ୍ତୁ',
                perfectScoreMessage: 'ଅଦ୍ଭୁତ! ଆପଣଙ୍କର ସ୍ୱାସ୍ଥ୍ୟ ଏବଂ ରୋଗ ପ୍ରତିରୋଧ ବିଷୟରେ ଉତ୍କୃଷ୍ଟ ଜ୍ଞାନ ଅଛି।',
                greatScoreMessage: 'ମହାନ କାର୍ଯ୍ୟ! ଆପଣଙ୍କର ଭଲ ସ୍ୱାସ୍ଥ୍ୟ ସଚେତନତା ଅଛି। ଆହୁରି ଉନ୍ନତି ପାଇଁ ଶିଖିବା ଜାରି ରଖନ୍ତୁ।',
                goodScoreMessage: 'ଭଲ ପ୍ରୟାସ! ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ଜ୍ଞାନରେ ଉନ୍ନତି ପାଇଁ ସ୍ଥାନ ଅଛି।',
                needsImprovementMessage: 'ଶିଖିବା ଜାରି ରଖନ୍ତୁ! ସ୍ୱାସ୍ଥ୍ୟର ମୂଳ କଥା ବୁଝିବା ସମସ୍ତଙ୍କ ପାଇଁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ।',
                copyMessage: 'ଫଳାଫଳ କ୍ଲିପବୋର୍ଡକୁ କପି କରାଗଲା! ଏହାକୁ ଆପଣଙ୍କ ବନ୍ଧୁମାନଙ୍କ ସହିତ ସେୟାର କରନ୍ତୁ।',
                // Quiz Data
                quizQuestions: [
                    { question: "ଜଣେ ସାଧାରଣ ବୟସ୍କ ବ୍ୟକ୍ତି ଦିନକୁ କେତେ ଗ୍ଲାସ ପାଣି ପିଇବା ଉଚିତ୍?", options: ["4-5 ଗ୍ଲାସ", "6-7 ଗ୍ଲାସ", "8-10 ଗ୍ଲାସ", "12-15 ଗ୍ଲାସ"], explanation: "ସଠିକ୍ ହାଇଡ୍ରେସନ୍ ଏବଂ ଶାରୀରିକ କାର୍ଯ୍ୟକୁ ସମର୍ଥନ କରିବା ପାଇଁ ବୟସ୍କମାନେ ପ୍ରତିଦିନ 8-10 ଗ୍ଲାସ୍ (ପ୍ରାୟ 2-2.5 ଲିଟର) ପାଣି ପିଇବା ଉଚିତ୍।", correct: 2, icon: "fas fa-tint" },
                    { question: "ଡେଙ୍ଗୁ ଜ୍ୱରର ସବୁଠାରୁ ସାଧାରଣ ଲକ୍ଷଣ କ’ଣ?", options: ["ଲଗାତାର କାଶ", "ମୁଣ୍ଡବିନ୍ଧା ସହିତ ଅତ୍ୟଧିକ ଜ୍ୱର", "ପେଟ ଯନ୍ତ୍ରଣା", "କେବଳ ଚର୍ମ ରାଶ"], explanation: "ଡେଙ୍ଗୁ ଜ୍ୱର ସାଧାରଣତଃ ହଠାତ୍ ଅତ୍ୟଧିକ ଜ୍ୱର (104°F) ଏବଂ ମୁଣ୍ଡବିନ୍ଧା ସହିତ ଆରମ୍ଭ ହୁଏ, ବିଶେଷ କରି ଆଖି ପଛରେ।", correct: 1, icon: "fas fa-thermometer-half" },
                    { question: "ସଂକ୍ରମଣକୁ ରୋକିବା ପାଇଁ ଆପଣଙ୍କ ହାତକୁ କେତେଥର ଧୋଇବା ଉଚିତ୍?", options: ["ଦିନକୁ ଥରେ", "କେବଳ ଖାଇବା ପୂର୍ବରୁ", "ସାରା ଦିନ ବାରମ୍ବାର", "କେବଳ ଯେତେବେଳେ ଦୃଶ୍ୟମାନ ଭାବରେ ମଇଳା ଥାଏ"], explanation: "ଦିନସାରା ନିୟମିତ ହାତ ଧୋଇବା, ବିଶେଷ କରି ଖାଇବା ପୂର୍ବରୁ, ଶୌଚାଳୟ ବ୍ୟବହାର ପରେ ଏବଂ ସର୍ବସାଧାରଣ ସ୍ଥାନକୁ ଛୁଇଁବା ପରେ, ସଂକ୍ରମଣକୁ ରୋକିବା ପାଇଁ ଅତ୍ୟନ୍ତ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ।", correct: 2, icon: "fas fa-hands-wash" },
                    { question: "ସୂର୍ଯ୍ୟାଲୋକରୁ ମୁଖ୍ୟତଃ କେଉଁ ଭିଟାମିନ୍ ମିଳିଥାଏ?", options: ["ଭିଟାମିନ୍ ଏ", "ଭିଟାମିନ୍ ବି12", "ଭିଟାମିନ୍ ସି", "ଭିଟାମିନ୍ ଡି"], explanation: "ସୂର୍ଯ୍ୟାଲୋକରୁ ଆସୁଥିବା UVB ରଶ୍ମିର ସଂସ୍ପର୍ଶରେ ଆସିଲେ ଚର୍ମରେ ଭିଟାମିନ୍ ଡି ତିଆରି ହୁଏ। ଏହା ହାଡ଼ର ସ୍ୱାସ୍ଥ୍ୟ ଏବଂ ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତି ପାଇଁ ଅତ୍ୟାବଶ୍ୟକ।", correct: 3, icon: "fas fa-sun" },
                    { question: "ସାବୁନରେ ହାତ ଧୋଇବା ପାଇଁ ସୁପାରିଶ କରାଯାଇଥିବା ସମୟ ସୀମା କେତେ?", options: ["5-10 ସେକେଣ୍ଡ", "15-20 ସେକେଣ୍ଡ", "20-30 ସେକେଣ୍ଡ", "1-2 ମିନିଟ୍"], explanation: "ଅତି କମରେ 20-30 ସେକେଣ୍ଡ ପାଇଁ ସାବୁନରେ ହାତ ଧୋଇବା ଜୀବାଣୁ ଏବଂ ବ୍ୟାକ୍ଟେରିଆକୁ ପ୍ରଭାବଶାଳୀ ଭାବରେ ବାହାର କରିଥାଏ।", correct: 2, icon: "fas fa-stopwatch" },
                    { question: "ଏଥିମଧ୍ୟରୁ କେଉଁଟି ମାଲେରିଆର ଏକ ସାଧାରଣ ଲକ୍ଷଣ?", options: ["ଲଗାତାର ଶୁଖିଲା କାଶ", "ଥଣ୍ଡା ସହିତ ବାରମ୍ବାର ଜ୍ୱର", "କେବଳ ଗମ୍ଭୀର ମୁଣ୍ଡବିନ୍ଧା", "ଚର୍ମର ରଙ୍ଗ ପରିବର୍ତ୍ତନ"], explanation: "ମାଲେରିଆ ସାଧାରଣତଃ ବାରମ୍ବାର ଜ୍ୱର, ଥଣ୍ଡା, ଏବଂ ଝାଳ ବାହାରିବା ସହିତ, ଅନେକ ସମୟରେ ମୁଣ୍ଡବିନ୍ଧା ଏବଂ ଥକାପଣ ଦେଖାଯାଏ।", correct: 1, icon: "fas fa-bug" },
                    { question: "ଉତ୍କୃଷ୍ଟ ସ୍ୱାସ୍ଥ୍ୟ ପାଇଁ ବୟସ୍କମାନଙ୍କୁ କେତେ ଘଣ୍ଟା ଶୋଇବା ଆବଶ୍ୟକ?", options: ["4-5 ଘଣ୍ଟା", "6-7 ଘଣ୍ଟା", "7-9 ଘଣ୍ଟା", "10-12 ଘଣ୍ଟା"], explanation: "ଉତ୍କୃଷ୍ଟ ଶାରୀରିକ ଏବଂ ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟ, ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତି ଏବଂ ମସ୍ତିଷ୍କର କାର୍ଯ୍ୟକ୍ଷମତା ପାଇଁ ବୟସ୍କମାନଙ୍କୁ ପ୍ରତି ରାତିରେ 7-9 ଘଣ୍ଟା ଗୁଣାତ୍ମକ ନିଦ ଆବଶ୍ୟକ।", correct: 2, icon: "fas fa-bed" },
                    { question: "ଶ୍ୱାସକ୍ରିୟା ସଂକ୍ରମଣର ପ୍ରସାରକୁ ରୋକିବା ପାଇଁ ସର୍ବୋତ୍ତମ ଉପାୟ କ’ଣ?", options: ["ନିୟମିତ ଭାବେ ଆଣ୍ଟିବାୟୋଟିକ ନେବା", "କାଶିବା / ଛିଙ୍କିବା ସମୟରେ ପାଟିକୁ ଘୋଡାଇବା", "ସମସ୍ତ ସାମାଜିକ ସମ୍ପର୍କକୁ ଏଡ଼ାଇବା", "କେବଳ ଗରମ ପାଣି ପିଇବା"], explanation: "କାଶିବା କିମ୍ବା ଛିଙ୍କିବା ସମୟରେ ଆପଣଙ୍କ ପାଟି ଏବଂ ନାକକୁ ଢାଙ୍କି ରଖିବା, ବିଶେଷ କରି ଏକ ଟିସୁ କିମ୍ବା କହୁଣୀ ସହିତ, ଶ୍ୱାସକ୍ରିୟା ବୁନ୍ଦା ମାଧ୍ୟମରେ ସଂକ୍ରମଣ ବିସ୍ତାରକୁ ରୋକିଥାଏ।", correct: 1, icon: "fas fa-head-side-mask" },
                    { question: "ଶରୀରର ଟିସୁ ଗଠନ ଏବଂ ମରାମତି ପାଇଁ କେଉଁ ଖାଦ୍ୟ ଗୋଷ୍ଠୀ ଅତ୍ୟନ୍ତ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ?", options: ["କାର୍ବୋହାଇଡ୍ରେଟ୍", "ପ୍ରୋଟିନ୍", "ଫ୍ୟାଟ୍", "ଭିଟାମିନ୍"], explanation: "ପ୍ରୋଟିନ୍ ଶରୀରର ଟିସୁ, ମାଂସପେଶୀ, ଅଙ୍ଗ ଏବଂ ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିକୁ ଗଠନ, ରକ୍ଷଣାବେକ୍ଷଣ ଏବଂ ମରାମତି କରିବା ପାଇଁ ଅତ୍ୟାବଶ୍ୟକ।", correct: 1, icon: "fas fa-drumstick-bite" },
                    { question: "ଡାଇବେଟିସ୍ ଟାଇପ୍ 2 ର ମୁଖ୍ୟ କାରଣ କ’ଣ?", options: ["ଭାଇରାଲ୍ ସଂକ୍ରମଣ", "କେବଳ ଜିନ୍ ଗତ କାରଣ", "ଜୀବନଶୈଳୀ କାରଣ ଏବଂ ଜିନ୍ ଗତ", "କେବଳ ବ୍ୟାୟାମର ଅଭାବ"], explanation: "ଟାଇପ୍ 2 ଡାଇବେଟିସ୍ ମୁଖ୍ୟତଃ ଜୀବନଶୈଳୀ କାରଣ (ଖାଦ୍ୟ, ଶାରୀରିକ କାର୍ଯ୍ୟକଳାପ, ଓଜନ) ଏବଂ ଜିନ୍ ଗତ କାରଣର ମିଶ୍ରଣ ହେତୁ ହୋଇଥାଏ।", correct: 2, icon: "fas fa-heartbeat" },
                ],
                healthTips: [
                    "ଦିନକୁ ମାତ୍ର 30 ମିନିଟ୍ ନିୟମିତ ବ୍ୟାୟାମ କ୍ରନିକ୍ ରୋଗର ଆଶଙ୍କାକୁ ଯଥେଷ୍ଟ କମ୍ କରିପାରେ।",
                    "ବିଭିନ୍ନ ରଙ୍ଗର ଫଳ ଏବଂ ପନିପରିବା ଖାଇବା ଦ୍ୱାରା ଆବଶ୍ୟକ ପୋଷକ ତତ୍ତ୍ୱ ଏବଂ ଆଣ୍ଟିଅକ୍ସିଡାଣ୍ଟ ମିଳିଥାଏ।",
                    "ଧ୍ୟାନ କିମ୍ବା ଗଭୀର ନିଶ୍ୱାସ ନେବା ମାଧ୍ୟମରେ ମାନସିକ ଚାପକୁ ପରିଚାଳନା କରିବା ମାନସିକ ଏବଂ ଶାରୀରିକ ସ୍ୱାସ୍ଥ୍ୟ ଉଭୟରେ ଉନ୍ନତି ଆଣିପାରେ।",
                    "ନିୟମିତ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ",
                    "କାମ କଲାବେଳେ ସଠିକ୍ ଭଙ୍ଗୀ ବଜାୟ ରଖିବା ପିଠି ଯନ୍ତ୍ରଣାକୁ ରୋକିପାରେ ଏବଂ ସାମଗ୍ରିକ ସୁସ୍ଥତାକୁ ଉନ୍ନତ କରିପାରେ।",
                    "ପ୍ରକ୍ରିୟାକୃତ ଖାଦ୍ୟ ଏବଂ ଚିନି ସେବନକୁ ସୀମିତ କରିବା ଏକ ସୁସ୍ଥ ଓଜନ ଏବଂ ଶକ୍ତି ସ୍ତର ବଜାୟ ରଖିବାରେ ସାହାଯ୍ୟ କରିଥାଏ।",
                    "ପର୍ଯ୍ୟାପ୍ତ ନିଦ ପାଇବା ଭଲ ସ୍ୱାସ୍ଥ୍ୟ ବଜାୟ ରଖିବା ପାଇଁ ଖାଦ୍ୟ ଏବଂ ବ୍ୟାୟାମ ପରି ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ।",
                    "ବନ୍ଧୁ ଏବଂ ପରିବାର ସହିତ ସାମାଜିକ ସମ୍ପର୍କ ରଖିବା ଉନ୍ନତ ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟ ଏବଂ ଦୀର୍ଘାୟୁତା ପାଇଁ ସହାୟକ ହୋଇଥାଏ।"
                ]
            },
            hi: {
                // UI Text
                headerTitle: '🩺 सखा',
                headerSubtitle: 'डिजिटल स्वास्थ्य मित्र',
                headerQuizTitle: 'स्वास्थ्य जागरूकता प्रश्नोत्तरी',
                welcomeTitle: 'सखा स्वास्थ्य क्विज में आपका स्वागत है',
                welcomeSubtitle: 'मज़े करते हुए अपने ज्ञान का परीक्षण करें और स्वास्थ्य के तथ्यों को जानें!',
                questionsCount: '10 प्रश्न',
                noTimeLimit: 'कोई समय सीमा नहीं',
                getCertified: 'प्रमाणित हों',
                startButton: 'क्विज शुरू करें',
                questionText: 'प्रश्न',
                scoreText: 'स्कोर:',
                nextButton: 'अगला प्रश्न',
                viewResultsButton: 'परिणाम देखें',
                explanationTitle: 'स्पष्टीकरण',
                quizCompleted: 'क्विज पूरा हुआ!',
                yourPerformance: 'आपका प्रदर्शन',
                correctAnswers: 'सही उत्तर',
                incorrectAnswers: 'गलत उत्तर',
                takeAgainButton: 'क्विज फिर से लें',
                shareButton: 'परिणाम साझा करें',
                footerText: '© 2025 सखा - एआई हेल्थ क्विज | स्वास्थ्य जागरूकता में सुधार',
                perfectScoreMessage: 'बहुत बढ़िया! आपको स्वास्थ्य और रोग निवारण के बारे में उत्कृष्ट ज्ञान है।',
                greatScoreMessage: 'बहुत अच्छा काम! आपके पास स्वास्थ्य जागरूकता की अच्छी समझ है। आगे सुधार के लिए सीखते रहें।',
                goodScoreMessage: 'अच्छा प्रयास! आपके स्वास्थ्य ज्ञान में सुधार की गुंजाइश है।',
                needsImprovementMessage: 'सीखते रहें! स्वास्थ्य की मूल बातें समझना सभी के लिए महत्वपूर्ण है।',
                copyMessage: 'परिणाम क्लिपबोर्ड पर कॉपी हो गया! इसे अपने दोस्तों के साथ साझा करें।',
                // Quiz Data
                quizQuestions: [
                    { question: "एक वयस्क को औसतन प्रतिदिन कितने गिलास पानी पीना चाहिए?", options: ["4-5 गिलास", "6-7 गिलास", "8-10 गिलास", "12-15 गिलास"], explanation: "वयस्कों को उचित हाइड्रेशन और शारीरिक कार्यों का समर्थन करने के लिए प्रतिदिन 8-10 गिलास (लगभग 2-2.5 लीटर) पानी पीना चाहिए।", correct: 2, icon: "fas fa-tint" },
                    { question: "डेंगू बुखार का सबसे आम लक्षण क्या है?", options: ["लगातार खांसी", "सिरदर्द के साथ तेज बुखार", "पेट दर्द", "केवल त्वचा पर दाने"], explanation: "डेंगू बुखार आमतौर पर अचानक तेज बुखार (104°F) और सिरदर्द के साथ शुरू होता है, खासकर आंखों के पीछे।", correct: 1, icon: "fas fa-thermometer-half" },
                    { question: "संक्रमणों को रोकने के लिए आपको अपने हाथ कितनी बार धोने चाहिए?", options: ["दिन में एक बार", "केवल भोजन से पहले", "दिन भर में बार-बार", "केवल जब वे स्पष्ट रूप से गंदे हों"], explanation: "दिन भर में नियमित रूप से हाथ धोना, खासकर खाने से पहले, बाथरूम का उपयोग करने के बाद, और सार्वजनिक सतहों को छूने के बाद, संक्रमण को रोकने के लिए महत्वपूर्ण है।", correct: 2, icon: "fas fa-hands-wash" },
                    { question: "कौन सा विटामिन मुख्य रूप से सूर्य के प्रकाश के संपर्क में आने से प्राप्त होता है?", options: ["विटामिन ए", "विटामिन बी12", "विटामिन सी", "विटामिन डी"], explanation: "विटामिन डी त्वचा में तब संश्लेषित होता है जब यह सूर्य के प्रकाश से यूवीबी किरणों के संपर्क में आती है। यह हड्डी के स्वास्थ्य और प्रतिरक्षा कार्य के लिए आवश्यक है।", correct: 3, icon: "fas fa-sun" },
                    { question: "साबुन से हाथ धोने की अनुशंसित अवधि क्या है?", options: ["5-10 सेकंड", "15-20 सेकंड", "20-30 सेकंड", "1-2 मिनट"], explanation: "कम से कम 20-30 सेकंड के लिए साबुन से हाथ धोना कीटाणुओं और बैक्टीरिया को प्रभावी ढंग से हटाता है।", correct: 2, icon: "fas fa-stopwatch" },
                    { question: "इनमें से कौन सा मलेरिया का एक सामान्य लक्षण है?", options: ["लगातार सूखी खांसी", "ठंड लगने के साथ बार-बार बुखार आना", "केवल गंभीर सिरदर्द", "त्वचा का रंग बदलना"], explanation: "मलेरिया आमतौर पर बार-बार बुखार, ठंड लगना और पसीना आने के साथ-साथ सिरदर्द और थकान के साथ आता है।", correct: 1, icon: "fas fa-bug" },
                    { question: "इष्टतम स्वास्थ्य के लिए वयस्कों को कितने घंटे की नींद की आवश्यकता होती है?", options: ["4-5 घंटे", "6-7 घंटे", "7-9 घंटे", "10-12 घंटे"], explanation: "इष्टतम शारीरिक और मानसिक स्वास्थ्य, प्रतिरक्षा कार्य, और संज्ञानात्मक प्रदर्शन के लिए वयस्कों को प्रति रात 7-9 घंटे की गुणवत्ता वाली नींद की आवश्यकता होती है।", correct: 2, icon: "fas fa-bed" },
                    { question: "श्वसन संक्रमण के प्रसार को रोकने का सबसे अच्छा तरीका क्या है?", options: ["नियमित रूप से एंटीबायोटिक्स लेना", "खांसते / छींकते समय मुंह को ढंकना", "सभी सामाजिक संपर्क से बचना", "केवल गर्म पानी पीना"], explanation: "खांसते या छींकते समय अपने मुंह और नाक को ढंकना, खासकर टिशू या कोहनी से, श्वसन बूंदों से संक्रमण के प्रसार को रोकता है।", correct: 1, icon: "fas fa-head-side-mask" },
                    { question: "शरीर के ऊतकों के निर्माण और मरम्मत के लिए कौन सा खाद्य समूह सबसे महत्वपूर्ण है?", options: ["कार्बोहाइड्रेट", "प्रोटीन", "वसा", "विटामिन"], explanation: "प्रोटीन शरीर के ऊतकों, मांसपेशियों, अंगों और प्रतिरक्षा प्रणाली के घटकों के निर्माण, रखरखाव और मरम्मत के लिए आवश्यक हैं।", correct: 1, icon: "fas fa-drumstick-bite" },
                    { question: "मधुमेह टाइप 2 का प्राथमिक कारण क्या है?", options: ["वायरल संक्रमण", "केवल आनुवंशिक कारक", "जीवनशैली कारक और आनुवंशिकी", "केवल व्यायाम की कमी"], explanation: "टाइप 2 मधुमेह मुख्य रूप से जीवनशैली कारकों (आहार, शारीरिक गतिविधि, वजन) और आनुवंशिक प्रवृत्ति के संयोजन के कारण होता है।", correct: 2, icon: "fas fa-heartbeat" },
                ],
                healthTips: [
                    "प्रतिदिन केवल 30 मिनट का नियमित व्यायाम पुराने रोगों के जोखिम को काफी कम कर सकता है।",
                    "रंगीन फल और सब्जियां खाने से आवश्यक पोषक तत्व और एंटीऑक्सिडेंट मिलते हैं।",
                    "ध्यान या गहरी सांस लेने के माध्यम से तनाव प्रबंधन मानसिक और शारीरिक स्वास्थ्य दोनों में सुधार कर सकता है।",
                    "नियमित स्वास्थ्य जांच गंभीर स्वास्थ्य स्थितियों का पता लगाने और उन्हें जल्दी रोकने में मदद कर सकती है।",
                    "काम करते समय अच्छी मुद्रा बनाए रखने से पीठ दर्द को रोका जा सकता है और समग्र कल्याण में सुधार हो सकता है।",
                    "प्रसंस्कृत खाद्य पदार्थ और चीनी का सेवन सीमित करने से स्वस्थ वजन और ऊर्जा स्तर बनाए रखने में मदद मिल सकती है।",
                    "अच्छे स्वास्थ्य को बनाए रखने के लिए पर्याप्त नींद लेना आहार और व्यायाम जितना ही महत्वपूर्ण है।",
                    "दोस्तों और परिवार के साथ सामाजिक रूप से जुड़े रहना बेहतर मानसिक स्वास्थ्य और दीर्घायु में योगदान देता है।"
                ]
            }
        };

        // --- Quiz State & DOM Elements ---
        let currentQuestion = 0;
        let score = 0;
        let selectedAnswer = null;
        let quizCompleted = false;

        const welcomeScreen = document.getElementById('welcome-screen');
        const quizScreen = document.getElementById('quiz-screen');
        const resultsScreen = document.getElementById('results-screen');
        const startQuizBtn = document.getElementById('start-quiz');
        const nextQuestionBtn = document.getElementById('next-question');
        const restartQuizBtn = document.getElementById('restart-quiz');
        const shareResultsBtn = document.getElementById('share-results');
        const currentQuestionSpan = document.getElementById('current-question');
        const totalQuestionsSpan = document.getElementById('total-questions');
        const currentScoreSpan = document.getElementById('current-score');
        const progressBar = document.getElementById('progress-bar');
        const questionIcon = document.getElementById('question-icon');
        const questionText = document.getElementById('question-text');
        const answerOptions = document.getElementById('answer-options');
        const explanation = document.getElementById('explanation');
        const explanationText = document.getElementById('explanation-text');
        const resultsIcon = document.getElementById('results-icon');
        const finalScore = document.getElementById('final-score');
        const totalScore = document.getElementById('total-score');
        const scorePercentage = document.getElementById('score-percentage');
        const performanceMessage = document.getElementById('performance-message');
        const correctAnswers = document.getElementById('correct-answers');
        const incorrectAnswers = document.getElementById('incorrect-answers');
        const healthTip = document.getElementById('health-tip');
        const messageBox = document.getElementById('message-box');
        
        // --- Event Listeners ---
        startQuizBtn.addEventListener('click', startQuiz);
        nextQuestionBtn.addEventListener('click', nextQuestion);
        restartQuizBtn.addEventListener('click', restartQuiz);
        shareResultsBtn.addEventListener('click', shareResults);

        // --- Core Functions ---
        function showMessage(message) {
            messageBox.textContent = message;
            messageBox.classList.add('show');
            setTimeout(() => {
                messageBox.classList.remove('show');
            }, 3000);
        }

        function setLanguage(lang) {
            if (translations[lang]) {
                currentLang = lang;
                localStorage.setItem('language', lang);
                updateUI();
                // If on quiz screen, reload question to show translated content
                if (!quizScreen.classList.contains('hidden') && !quizCompleted) {
                    loadQuestion();
                }
            }
            // Update active button state
            document.querySelectorAll('.lang-btn').forEach(btn => {
                if (btn.textContent.toLowerCase().includes(lang)) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        function updateUI() {
            const t = translations[currentLang];
            const qCount = t.quizQuestions.length;
            
            // Update static UI elements
            document.querySelector('h1').textContent = t.headerTitle;
            document.querySelector('p.text-white\\/80.text-sm').textContent = t.headerSubtitle;
            document.querySelector('h2.text-white.text-lg').innerHTML = `<i class="fas fa-heartbeat mr-2"></i>${t.headerQuizTitle}`;
            document.querySelector('#welcome-screen h2').textContent = t.welcomeTitle;
            document.querySelector('#welcome-screen p.text-white\\/80.text-lg').textContent = t.welcomeSubtitle;
            document.querySelector('.grid.grid-cols-1.md\\:grid-cols-3.gap-4.mb-8 > div:nth-child(1) > p').textContent = t.questionsCount;
            document.querySelector('.grid.grid-cols-1.md\\:grid-cols-3.gap-4.mb-8 > div:nth-child(2) > p').textContent = t.noTimeLimit;
            document.querySelector('.grid.grid-cols-1.md\\:grid-cols-3.gap-4.mb-8 > div:nth-child(3) > p').textContent = t.getCertified;
            document.querySelector('#start-quiz').innerHTML = `<i class="fas fa-play mr-2"></i>${t.startButton}`;
            
            // Update quiz screen text
            if (currentQuestionSpan) {
                currentQuestionSpan.parentNode.innerHTML = `<i class="fas fa-question mr-1"></i>${t.questionText} <span id="current-question">${currentQuestion + 1}</span>/<span id="total-questions">${qCount}</span>`;
            }
            if (currentScoreSpan) {
                currentScoreSpan.parentNode.innerHTML = `<i class="fas fa-star mr-1 text-yellow-300"></i>${t.scoreText} <span id="current-score">${score}</span>`;
            }
            if (explanation) {
                 explanation.querySelector('h4').innerHTML = `<i class="fas fa-lightbulb mr-2"></i>${t.explanationTitle}`;
            }

            // Update results screen text
            document.querySelector('#results-screen h2').textContent = t.quizCompleted;
            document.querySelector('#score-analysis h3').innerHTML = `<i class="fas fa-chart-line mr-2"></i>${t.yourPerformance}`;
            document.querySelector('#correct-answers').parentNode.querySelector('div:last-child').textContent = t.correctAnswers;
            document.querySelector('#incorrect-answers').parentNode.querySelector('div:last-child').textContent = t.incorrectAnswers;
            document.querySelector('#restart-quiz').innerHTML = `<i class="fas fa-redo mr-2"></i>${t.takeAgainButton}`;
            document.querySelector('#share-results').innerHTML = `<i class="fas fa-share mr-2"></i>${t.shareButton}`;
            
            // Update footer text
            document.querySelector('footer p').innerHTML = t.footerText;
            
            // Update next question button text conditionally
            if (nextQuestionBtn.classList.contains('hidden') === false) {
                if (currentQuestion === qCount - 1) {
                    nextQuestionBtn.innerHTML = `${t.viewResultsButton} <i class="fas fa-chart-bar ml-2"></i>`;
                } else {
                    nextQuestionBtn.innerHTML = `${t.nextButton} <i class="fas fa-arrow-right ml-2"></i>`;
                }
            }
        }

        function init() {
            const savedLang = localStorage.getItem('language');
            if (savedLang && translations[savedLang]) {
                currentLang = savedLang;
            } else {
                currentLang = 'en'; // Default
            }

            const qCount = translations[currentLang].quizQuestions.length;
            if (totalQuestionsSpan) totalQuestionsSpan.textContent = qCount;
            if (totalScore) totalScore.textContent = qCount;
            updateUI();
            setLanguage(currentLang);
        }

        function startQuiz() {
            currentQuestion = 0;
            score = 0;
            selectedAnswer = null;
            quizCompleted = false;

            welcomeScreen.classList.add('hidden');
            resultsScreen.classList.add('hidden');
            quizScreen.classList.remove('hidden');
            
            loadQuestion();
        }

        function loadQuestion() {
            const question = translations[currentLang].quizQuestions[currentQuestion];
            const qCount = translations[currentLang].quizQuestions.length;
            
            currentQuestionSpan.textContent = currentQuestion + 1;
            currentScoreSpan.textContent = score;
            const progressPercent = ((currentQuestion + 1) / qCount) * 100;
            progressBar.style.width = progressPercent + '%';
            
            questionIcon.className = question.icon + ' text-white text-xl';
            questionText.textContent = question.question;
            
            answerOptions.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'answer-option glass-card rounded-lg p-4 border-2 border-transparent hover:border-white/30';
                optionDiv.innerHTML = `
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 rounded-full border-2 border-white/50 flex items-center justify-center text-white font-semibold">
                            ${String.fromCharCode(65 + index)}
                        </div>
                        <span class="text-white">${option}</span>
                    </div>
                `;
                
                optionDiv.addEventListener('click', () => selectAnswer(index, optionDiv));
                answerOptions.appendChild(optionDiv);
            });
            
            explanation.classList.add('hidden');
            nextQuestionBtn.classList.add('hidden');
            selectedAnswer = null;
            
            document.getElementById('question-card').classList.remove('fade-in');
            setTimeout(() => {
                document.getElementById('question-card').classList.add('fade-in');
            }, 50);
        }

        function selectAnswer(answerIndex, optionElement) {
            if (selectedAnswer !== null) return;
            
            selectedAnswer = answerIndex;
            const question = translations[currentLang].quizQuestions[currentQuestion];
            const isCorrect = answerIndex === question.correct;
            
            if (isCorrect) {
                score++;
                currentScoreSpan.textContent = score;
            }
            
            const options = answerOptions.children;
            for (let i = 0; i < options.length; i++) {
                const option = options[i];
                if (i === question.correct) {
                    option.classList.add('correct');
                    option.querySelector('.w-8').innerHTML = '<i class="fas fa-check"></i>';
                } else if (i === answerIndex && !isCorrect) {
                    option.classList.add('incorrect');
                    option.querySelector('.w-8').innerHTML = '<i class="fas fa-times"></i>';
                } else {
                    option.style.opacity = '0.5';
                }
                option.style.pointerEvents = 'none';
            }
            
            explanationText.textContent = question.explanation;
            explanation.classList.remove('hidden');
            
            setTimeout(() => {
                nextQuestionBtn.classList.remove('hidden');
                if (currentQuestion === translations[currentLang].quizQuestions.length - 1) {
                    nextQuestionBtn.innerHTML = `${translations[currentLang].viewResultsButton} <i class="fas fa-chart-bar ml-2"></i>`;
                } else {
                    nextQuestionBtn.innerHTML = `${translations[currentLang].nextButton} <i class="fas fa-arrow-right ml-2"></i>`;
                }
            }, 1000);
        }

        function nextQuestion() {
            if (currentQuestion < translations[currentLang].quizQuestions.length - 1) {
                currentQuestion++;
                loadQuestion();
            } else {
                quizCompleted = true;
                showResults();
            }
        }

        function showResults() {
            quizScreen.classList.add('hidden');
            resultsScreen.classList.remove('hidden');
            
            const qCount = translations[currentLang].quizQuestions.length;
            const percentage = Math.round((score / qCount) * 100);
            const incorrect = qCount - score;
            
            finalScore.textContent = score;
            scorePercentage.textContent = percentage + '%';
            correctAnswers.textContent = score;
            incorrectAnswers.textContent = incorrect;
            
            let message, icon;
            if (percentage >= 90) {
                message = translations[currentLang].perfectScoreMessage;
                icon = "🏆";
            } else if (percentage >= 70) {
                message = translations[currentLang].greatScoreMessage;
                icon = "🎉";
            } else if (percentage >= 50) {
                message = translations[currentLang].goodScoreMessage;
                icon = "👍";
            } else {
                message = translations[currentLang].needsImprovementMessage;
                icon = "📚";
            }
            
            performanceMessage.textContent = message;
            resultsIcon.textContent = icon;
            
            const randomTip = translations[currentLang].healthTips[Math.floor(Math.random() * translations[currentLang].healthTips.length)];
            healthTip.textContent = randomTip;
            
            resultsScreen.querySelector('.glass-card').classList.add('fade-in');
        }

        function restartQuiz() {
            currentQuestion = 0;
            score = 0;
            selectedAnswer = null;
            quizCompleted = false;

            resultsScreen.classList.add('hidden');
            welcomeScreen.classList.remove('hidden');
            updateUI();
        }

        function shareResults() {
            const qCount = translations[currentLang].quizQuestions.length;
            const percentage = Math.round((score / qCount) * 100);
            const text = `I just completed the Sakha Health Quiz and scored ${score}/${qCount} (${percentage}%)! Test your health knowledge too. #SakhaHealth #HealthAwareness #PublicHealth`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'Sakha Health Quiz Results',
                    text: text,
                    url: window.location.href
                });
            } else {
                navigator.clipboard.writeText(text).then(() => {
                    showMessage(translations[currentLang].copyMessage);
                }).catch(err => {
                    console.error('Could not copy text: ', err);
                });
            }
        }
        
        // Initializer
        document.addEventListener('DOMContentLoaded', init);