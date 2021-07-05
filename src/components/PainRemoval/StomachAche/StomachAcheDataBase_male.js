export const data = [
    {
        causes: [
            {
                title: 'Infection',
                article: '',
                causes: [
                    "Medical procedures, such as peritoneal dialysis: Peritoneal dialysis uses tubes (catheters) to remove waste products from your blood when your kidneys can no longer adequately do so. An infection may occur during peritoneal dialysis due to unclean surroundings, poor hygiene or contaminated equipment. Peritonitis may also develop as a complication of gastrointestinal surgery, the use of feeding tubes, or a procedure to withdraw fluid from your abdomen, and rarely as a complication of a colonoscopy or endoscopy.",
                    "A ruptured appendix, stomach ulcer or perforated colon: Any of these conditions can allow bacteria to get into the peritoneum through a hole in your gastrointestinal tract.",
                    "Pancreatitis: Inflammation of your pancreas (pancreatitis) complicated by infection may lead to peritonitis if the bacteria spreads outside the pancreas.",
                    "Diverticulitis: Infection of small, bulging pouches in your digestive tract (diverticulosis) may cause peritonitis if one of the pouches ruptures, spilling intestinal waste into your abdominal cavity.",
                    "Trauma: Injury or trauma may cause peritonitis by allowing bacteria or chemicals from other parts of your body to enter the peritoneum."
                ],
                symptoms: [
                    {
                        pain: ['Tender'],
                        with: ['Loss of appetite','Nausea','Vomiting','Bloating','Fever','Diarrhea','Thirst','Low urine output','Lumpy/hard stool','Fatigue','Confusion']
                    }
                ],
                preventive_treatment: {
                    see_doctor_when: [],
                    diagnosis: [
                        "Blood test: A sample of your blood may be drawn and sent to a lab to check for a high white blood cell count. A blood culture also may be performed to determine if there are bacteria in your blood.",
                        "Imaging tests: Your doctor may want to use an X-ray to check for holes or other perforations in your gastrointestinal tract. Ultrasound also may be used. In some cases, your doctor may use a computerized tomography (CT) scan instead of an X-ray.",
                        "Peritoneal fluid analysis. Using a thin needle, your doctor may take a sample of the fluid in your peritoneum (paracentesis), especially if you receive peritoneal dialysis or have fluid in your abdomen from liver disease. If you have peritonitis, examination of this fluid may show an increased white blood cell count, which typically indicates an infection or inflammation. A culture of the fluid may also reveal the presence of bacteria."
                    ],
                    treatments: [
                        "Antibiotics: You'll likely be given a course of antibiotic medication to fight the infection and prevent it from spreading. The type and duration of your antibiotic therapy will depend on the severity of your condition and the kind of peritonitis you have. You may be given an antibiotic that treats a wide spectrum of bacteria until doctors have more information about the specific bacteria causing your infection. Then they can more narrowly target your antibiotic.",
                        "Surgery: Surgery is often needed to remove infected tissue, treat the underlying cause of the infection, and prevent the infection from spreading, especially if peritonitis is due to a ruptured appendix, stomach or colon.",
                        "Other treatments: Depending on your signs and symptoms, your treatment while in the hospital will likely include pain medications, fluids given through a tube (intravenous fluids), oxygen and, in some cases, a blood transfusion."
                    ]
                }
            },
            {
                title: 'Abnormal growths',
                article: '',
                causes: ['Cysts','Cancer'],
                symptoms: [
                    {
                        pain: [],
                        with: ['Swelling','Nausea','Vomiting','Weight gain','Low urine output','Inability to urinate','Constipation','Fever']
                    }
                ],
                preventive_treatment: {
                    see_doctor_when: [],
                    diagnosis: ['Abdominal CT scan','Abdominal X-ray','Abdominal ultrasound'],
                    treatments: [
                        'Medications to correct hormones',
                        'Surgical removal of the mass',
                        'Methods to shrink the mass',
                        'Chemotherapy',
                        'Radiation Therapy'
                    
                    ]
                }
            },
            {
                title: 'Intestinal obstruction (blockage)',
                article: 'ntestinal obstruction is a blockage that keeps food or liquid from passing through your small intestine or large intestine (colon).',
                causes: ['Fibrous bands of tissue (adhesions) in the abdomen that form after surgery', 'Hernias', 'Colon cancer', 'Certain medications', "strictures from an inflamed intestine caused by certain conditions, such as Crohn's disease or diverticulitis."],
                symptoms: [
                    {
                        pain: ['Intermittent', 'Crampy'],
                        with: ['Loss of appetite', 'Constipation', 'Vomiting', 'Inability to have a bowel movement or pass gas', 'Swelling']
                    }
                ],
                preventive_treatment: {
                    see_doctor_when: [],
                    diagnosis: ['CT Scan', 'Physical exam', 'X-Ray', 'Barium enema', 'Ultrasound'],
                    treatments: ['Hospitalisation (depends on the severity)']
                }
            },
            {
                title: 'Constipation',
                article: 'It’s defined as having hard, dry bowel movements, or going fewer than three times a week.\nYour colon’s main job is to absorb water from residual food as it’s passing through your digestive system. It then creates stool (waste).\nThe colon’s muscles eventually propel the waste out through the rectum to be eliminated. If stool remains in the colon too long, it can become hard and difficult to pass.',
                causes: ['Low fiber diet', 'Stress', 'Changes in routine', 'Dehydration', 'Conditions that slow muscle contractions of the colon', 'delaying the impulse to have a bowel movement', 'Certain medications, such as high calcium antacids and pain medications'],
                symptoms: [
                    {
                        pain: ['Strained during bowel movements'],
                        with: ['Fewer than three stools a week', 'Lumpy/hard stool','Inability to pass stool']
                    }
                ],
                preventive_treatment: {
                    see_doctor_when: ['you’ve had constipation for more than three weeks', 'you have blood in your stool', 'you’re experiencing pain during bowel movements', 'you’re losing weight', 'you have sudden changes in your bowel movements'],
                    diagnosis: ['Examination of the rectum', 'Blood tests', 'Electrolytes', 'Thyroid function test'],
                    treatments: ['Eat plenty of fiber or take fiber supplements.', 'Reduce your caffeine and alcohol intake.', 'Stay hydrated', 'Reduce foods that can cause constipation, such as meat and dairy', 'Exercise', 'Laxatives after talking to doctor']
                }
            },
            {
                title: 'Gastroenteritis (commonly known as stomach flu)                ',
                article: 'It is an intestinal infection marked by watery diarrhea, abdominal cramps, nausea or vomiting, and sometimes fever. The most common way to develop viral gastroenteritis — often called stomach flu —is through contact with an infected person or by ingesting contaminated food or water.',
                causes: ['a virus – such as norovirus or rotavirus', 'bacteria – such as campylobacter and Escherichia coli (E. coli), which are often picked up from contaminated food.', 'a parasite – such as the parasite that causes giardiasis, which is spread in contaminated water'],
                symptoms: [
                    {
                        pain: ['Symptom other than pain'],
                        with: ['Watery stools', 'Occasional muscle aches', 'Headache', 'Fever', 'Mucus in the stool', 'Bloating', 'Nausea', 'Frequent bowel movements']
                    }
                ],
                preventive_treatment: {
                    see_doctor_when: [],
                    diagnosis: ['Stool test'],
                    treatments: ['Hydrate', 'ORS', 'Rest', 'Medications to reduce diarrhoea, such as loperamide, are available. However, these are not usually necessary, and most types should not be given to children.']
                }
            },
            {
                title: 'Diarrhea',
                article: 'Diarrhoea or Diarrhea is a disorder that causes you to pass looser or more stool than usual. Often symptomatic of Gastroenteritis, which is the inflammation of the stomach or intestine as a result of microbial infection, Diarrhoea usually lasts for 2-4 days without the need for treatment. Severe diarrhoea, on the other hand, poses a threat to your life. The reason behind this is the dehydration that your body undergoes as it steadily loses fluids with every passing of motion. \nThis is usually more severe infection than Gastroenteritis',
                causes: ['a virus – such as norovirus or rotavirus', 'bacteria – such as campylobacter and Escherichia coli (E. coli), which are often picked up from contaminated food.', 'a parasite – such as the parasite that causes giardiasis, which is spread in contaminated water', 'Anxiety', 'Food allergy', 'Medication', 'Long term condition such as Irritable Bowel Syndrome (IBS).'],
                symptoms: [
                    {
                        pain: ['Crampy'],
                        with: ['Watery stools', 'Fever', 'Blood in the stool', 'Mucus in the stool', 'Bloating', 'Nausea', 'Frequent bowel movements']
                    }
                ],
                preventive_treatment: {
                    see_doctor_when: [],
                    diagnosis: ['Blood test', 'Stool test', 'Colonoscopy'],
                    treatments: ['Antibiotics', 'Replacing lost fluids']
                }
            },
            {
                title: 'Gastroesophageal reflux disease (known as GERD)',
                article: 'When contents of the stomach leak backward into the esophagus, causing heartburn and other symptoms, this is called acid reflux.\nMany people experience acid reflux from time to time. GERD is mild acid reflux that occurs at least twice a week, or moderate to severe acid reflux that occurs at least once a week.',
                causes: ['Frequent acid reflux', 'When you swallow, a circular band of muscle around the bottom of your esophagus (lower esophageal sphincter) relaxes to allow food and liquid to flow into your stomach. Then the sphincter closes again.\nIf the sphincter relaxes abnormally or weakens, stomach acid can flow back up into your esophagus. This constant backwash of acid irritates the lining of your esophagus, often causing it to become inflamed.'],
                symptoms: [
                    {
                        pain: ['Burning', 'After eating', 'Worst at night'],
                        with: ['Heartburn', 'Chest Pain', 'Difficulty swallowing', 'Regurgitation of food or sour liquid', 'Sensation of a lump in your throat']
                    }
                ],
                preventive_treatment: {
                    see_doctor_when: ['You have chest pain, especially if you also have shortness of breath, or jaw or arm pain. These may be signs and symptoms of a heart attack.', 'Experience severe or frequent GERD symptoms', 'Take over-the-counter medications for heartburn more than twice a week'],
                    diagnosis: ['Endoscopy: to check for abnormalities in your esophagus. A tissue sample (biopsy) may be taken for analysis.',
                        'X-Rays: to view the shape and condition of your esophagus and stomach.',
                        'Ambulatory probe test: to identify when, and for how long, stomach acid backs up into your esophagus. An acid monitor that is placed in your esophagus connects to a small computer that you wear around your waist or on a strap over your shoulder.',
                        'Esophageal motility testing: to measure movement and pressure in your esophagus.'
                    ],
                    treatments: ['Antacids', 'Medicines to reduce acid production']
                }
            },
            {
                title: 'Irritable Bowel Syndrome (IBS)',
                article: 'This is a condition that causes abdominal pain, cramping, and changes in bowel movements.',
                causes: ['Muscle contractions in the intestine: The walls of the intestines are lined with layers of muscle that contract as they move food through your digestive tract. Contractions that are stronger and last longer than normal can cause gas, bloating and diarrhea. Weak intestinal contractions can slow food passage and lead to hard, dry stools.', 'Nervous system. Abnormalities in the nerves in your digestive system may cause you to experience greater than normal discomfort when your abdomen stretches from gas or stool. Poorly coordinated signals between the brain and the intestines can cause your body to overreact to changes that normally occur in the digestive process, resulting in pain, diarrhea or constipation.', 'Severe infection. IBS can develop after a severe bout of diarrhea (gastroenteritis) caused by bacteria or a virus. IBS might also be associated with a surplus of bacteria in the intestines (bacterial overgrowth).', 'Early life stress. People exposed to stressful events, especially in childhood, tend to have more symptoms of IBS.', 'Changes in gut microbes. Examples include changes in bacteria, fungi and viruses, which normally reside in the intestines and play a key role in health. Research indicates that the microbes in people with IBS might differ from those in healthy people.'],
                symptoms: [
                    {
                        pain: ['Crampy'],
                        with: ['Bloating', 'Changes in appearance of bowel movement', 'Frequent bowel movements', 'Mucus in the stool']
                    }
                ],
                preventive_treatment: {
                    see_doctor_when: ['See your doctor if you have a persistent change in bowel habits or other signs or symptoms of IBS. They may indicate a more serious condition, such as colon cancer.'],
                    diagnosis: ['Colonoscopy', 'X-ray or CT Scan', 'Upper endoscopy', 'Stool tests'],
                    treatments: ['Avoid foods that trigger your symptoms. Many people have worse IBS symptoms when they eat or drink certain foods or beverages, including wheat, dairy products, citrus fruits, beans, cabbage, milk and carbonated drinks.', 'Eat high-fiber foods', 'Drink plenty of fluids', 'Exercise regularly', 'Get enough sleep']
                }
            },
            {
                title: 'Crohn’s disease',
                article: "Crohn's disease is a type of inflammatory bowel disease (IBD). It causes inflammation of your digestive tract, which can lead to abdominal pain, severe diarrhea, fatigue, weight loss and malnutrition.",
                causes: ["Immune system. It's possible that a virus or bacterium may trigger Crohn's disease; however, scientists have yet to identify such a trigger. When your immune system tries to fight off the invading microorganism, an abnormal immune response causes the immune system to attack the cells in the digestive tract, too.", "Heredity. Crohn's is more common in people who have family members with the disease, so genes may play a role in making people more susceptible. However, most people with Crohn's disease don't have a family history of the disease."],
                symptoms: [
                    {
                        pain: ['Crampy', 'Near anus'],
                        with: ['Diarrhea', 'Fever', 'Fatigue', 'Blood in the stool', 'Sore mouth', 'Reduced appetite', 'Weight loss', 'Drainage near or around anus']
                    }
                ],
                preventive_treatment: {
                    see_doctor_when: [],
                    diagnosis: ['Blood tests', 'Stool studies'],
                    treatments: ['Corticosteroids', 'Immune system suppressants', 'Antibiotics']
                }
            },
            {
                title: 'Organ Rupture or Near Rupture',
                article: '',
                causes: [''],
                symptoms: [
                    {
                        pain: ['Severe', 'Sudden'],
                        with: []
                    }
                ],
                preventive_treatment: {
                    see_doctor_when: [],
                    diagnosis: [],
                    treatments: []
                }
            },
            {
                title: 'Gallstones',
                article: '',
                causes: ['Your bile contains too much cholesterol. Normally, your bile contains enough chemicals to dissolve the cholesterol excreted by your liver. But if your liver excretes more cholesterol than your bile can dissolve, the excess cholesterol may form into crystals and eventually into stones.', "Your bile contains too much bilirubin. Bilirubin is a chemical that's produced when your body breaks down red blood cells. Certain conditions cause your liver to make too much bilirubin, including liver cirrhosis, biliary tract infections and certain blood disorders. The excess bilirubin contributes to gallstone formation.", "Your gallbladder doesn't empty correctly. If your gallbladder doesn't empty completely or often enough, bile may become very concentrated, contributing to the formation of gallstones."],
                symptoms: [
                    {
                        pain: ['Sudden', 'Severe', 'In upper right portion of abdomen', 'In center of abdomen, just below breastbone', 'Back pain between your shoulder blades', 'Pain in your right shoulder', 'Nausea'],
                        with: ['',]
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: [
                        "Abdominal ultrasound: This test is the one most commonly used to look for signs of gallstones. Abdominal ultrasound involves moving a device (transducer) back and forth across your stomach area. The transducer sends signals to a computer, which creates images that show the structures in your abdomen.",
                        "Endoscopic ultrasound (EUS): This procedure can help identify smaller stones that may be missed on an abdominal ultrasound. During EUS your doctor passes a thin, flexible tube (endoscope) through your mouth and through your digestive tract. A small ultrasound device (transducer) in the tube produces sound waves that create a precise image of surrounding tissue.",
                        "Other imaging tests: Additional tests may include oral cholecystography, a hepatobiliary iminodiacetic acid (HIDA) scan, computerized tomography (CT), magnetic resonance cholangiopancreatography (MRCP) or endoscopic retrograde cholangiopancreatography (ERCP). Gallstones discovered using ERCP can be removed during the procedure.",
                        "Blood tests: Blood tests may reveal infection, jaundice, pancreatitis or other complications caused by gallstones."
                    ],
                    treatments: [
                        "Surgery to remove the gallbladder (cholecystectomy): Your doctor may recommend surgery to remove your gallbladder, since gallstones frequently recur. Once your gallbladder is removed, bile flows directly from your liver into your small intestine, rather than being stored in your gallbladder.\n You don't need your gallbladder to live, and gallbladder removal doesn't affect your ability to digest food, but it can cause diarrhea, which is usually temporary.",
                        "Medications to dissolve gallstones: Medications you take by mouth may help dissolve gallstones. But it may take months or years of treatment to dissolve your gallstones in this way, and gallstones will likely form again if treatment is stopped.\n Sometimes medications don't work. Medications for gallstones aren't commonly used and are reserved for people who can't undergo surgery."
                    ]
                }
            },
        ],
        common_causes: [
            'Infection ', 'Abnormal growths', 'Inflammation'
        ],
        talk_to_doctor_when: [

        ]
    }
]