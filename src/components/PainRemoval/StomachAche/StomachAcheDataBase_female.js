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
                        with: ['Loss of appetite', 'Constipation', 'Vomiting', 'Inability to have a bowel movement or pass gas', 'Swelling','Unusual bowel movements']
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
                        with: ['Fewer than three stools a week', 'Lumpy/hard stool','Inability to pass stool','Unusual bowel movements']
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
                        with: ['Watery stools', 'Occasional muscle aches', 'Headache', 'Fever', 'Mucus in the stool', 'Bloating', 'Nausea', 'Unusual bowel movements']
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
                        with: ['Watery stools', 'Fever', 'Blood in the stool', 'Mucus in the stool', 'Bloating', 'Nausea', 'Frequent bowel movements','Unusual bowel movements']
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
                title: 'Gallstones',
                article: '',
                causes: ['Your bile contains too much cholesterol. Normally, your bile contains enough chemicals to dissolve the cholesterol excreted by your liver. But if your liver excretes more cholesterol than your bile can dissolve, the excess cholesterol may form into crystals and eventually into stones.', "Your bile contains too much bilirubin. Bilirubin is a chemical that's produced when your body breaks down red blood cells. Certain conditions cause your liver to make too much bilirubin, including liver cirrhosis, biliary tract infections and certain blood disorders. The excess bilirubin contributes to gallstone formation.", "Your gallbladder doesn't empty correctly. If your gallbladder doesn't empty completely or often enough, bile may become very concentrated, contributing to the formation of gallstones."],
                symptoms: [
                    {
                        pain: ['Sudden', 'Severe', 'In upper right portion of abdomen', 'In center of abdomen, just below breastbone'],
                        with: ['Back pain between your shoulder blades', 'Pain in your right shoulder', 'Nausea']
                    }
                ],
                preventive_treatment: {
                    see_doctor_when: [],
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
            {
                title: 'Menstrual pain',
                article: 'This is perhaps the most common cause of abdominal pain in women. Menstruation causes the contraction of uterus walls and this leads to the pain, which may be severe in some cases and gets rectified with age. For those women who are experiencing a lot of pain can take painkillers to help reduce the pain.',
                causes: [
                    "Endometriosis. The tissue that lines your uterus becomes implanted outside your uterus, most commonly on your fallopian tubes, ovaries or the tissue lining your pelvis.",
                    "Uterine fibroids. These noncancerous growths in the wall of the uterus can cause pain.",
                    "Adenomyosis. The tissue that lines your uterus begins to grow into the muscular walls of the uterus.",
                    "Pelvic inflammatory disease. This infection of the female reproductive organs is usually caused by sexually transmitted bacteria.",
                    "Cervical stenosis. In some women, the opening of the cervix is small enough to impede menstrual flow, causing a painful increase of pressure within the uterus."
                ],
                symptoms: [
                    {
                        pain: ['Crampy', 'Constant', 'Intense', 'Throbbing','In lower abdomen','Started 1-3 days before period','During periods'],
                        with: ['Nausea','Unusual bowel movements','Headache','Dizziness']
                    }
                ],
                preventive_treatment: {
                    see_doctor_when: '',
                    diagnosis: [
                        "Ultrasound. This test uses sound waves to create an image of your uterus, cervix, fallopian tubes and ovaries.",
                        "Other imaging tests. A CT scan or MRI scan provides more detail than an ultrasound and can help your doctor diagnose underlying conditions. CT combines X-ray images taken from many angles to produce cross-sectional images of bones, organs and other soft tissues inside your body.\nMRI uses radio waves and a powerful magnetic field to produce detailed images of internal structures. Both tests are noninvasive and painless.",
                        "Laparoscopy. Although not usually necessary to diagnosis menstrual cramps, laparoscopy can help detect an underlying condition, such as endometriosis, adhesions, fibroids, ovarian cysts and ectopic pregnancy. During this outpatient surgery, your doctor views your abdominal cavity and reproductive organs by making tiny incisions in your abdomen and inserting a fiber-optic tube with a small camera lens."
                    ],
                    treatments: [
                        "Pain relievers. Over-the-counter pain relievers, such as ibuprofen (Advil, Motrin IB, others) or naproxen sodium (Aleve), at regular doses starting the day before you expect your period to begin can help control the pain of cramps. Prescription nonsteroidal anti-inflammatory drugs also are available.\nStart taking the pain reliever at the beginning of your period, or as soon as you feel symptoms, and continue taking the medicine as directed for two to three days, or until your symptoms are gone.",
                        "Hormonal birth control. Oral birth control pills contain hormones that prevent ovulation and reduce the severity of menstrual cramps. These hormones can also be delivered in several other forms: an injection, a skin patch, an implant placed under the skin of your arm, a flexible ring that you insert into your vagina, or an intrauterine device (IUD).",
                        "Surgery. If your menstrual cramps are caused by a disorder such as endometriosis or fibroids, surgery to correct the problem might help your symptoms. Surgical removal of the uterus also might be an option if other approaches fail to ease your symptoms and if you're not planning to have children."
                    ]
                }
            },
            {
                title: 'Premenstrual syndrome (PMS)',
                article: "PMS has a wide variety of signs and symptoms, including mood swings, tender breasts, food cravings, fatigue, irritability and depression. It's estimated that as many as 3 of every 4 menstruating women have experienced some form of premenstrual syndrome. \nPMS can also cause abdominal pain before menstruation, especially in the lower abdomen. It is generally experienced a day or two days prior to your menstruation and may not be too severe. The abdominal pain may also be experienced on both the sides of the lower abdomen during the time of ovulation.",
                causes: [
                    "Cyclic changes in hormones. Signs and symptoms of premenstrual syndrome change with hormonal fluctuations and disappear with pregnancy and menopause.",
                    "Chemical changes in the brain. Fluctuations of serotonin, a brain chemical (neurotransmitter) that's thought to play a crucial role in mood states, could trigger PMS symptoms. Insufficient amounts of serotonin may contribute to premenstrual depression, as well as to fatigue, food cravings and sleep problems.",
                    "Depression. Some women with severe premenstrual syndrome have undiagnosed depression, though depression alone does not cause all of the symptoms"
                ],
                symptoms: [
                    {
                        pain: ['In muscle','Crampy'],
                        with: ['Tension','Started 1-3 days before period','Fatique','Bloating','Breast Tenderness','Acne','Unusual bowel movements','Anxiety','Crying spells','Mood swings','Appetite change','Insomnia','Poor concentration','Alcohol intolerance']
                    }
                ],
                preventive_treatment: {
                    see_doctor_when: '',
                    diagnosis: [
                        "There are no unique physical findings or lab tests to positively diagnose premenstrual syndrome. Your doctor may attribute a particular symptom to PMS if it's part of your predictable premenstrual pattern.",
                    ],
                    treatments: [
                        "Antidepressants. Selective serotonin reuptake inhibitors (SSRIs) — which include fluoxetine (Prozac, Sarafem), paroxetine (Paxil, Pexeva), sertraline (Zoloft) and others — have been successful in reducing mood symptoms. SSRIs are the first line treatment for severe PMS or PMDD. These medications are generally taken daily. But for some women with PMS, use of antidepressants may be limited to the two weeks before menstruation begins.",
                        "Nonsteroidal anti-inflammatory drugs (NSAIDs). Taken before or at the onset of your period, NSAIDs such as ibuprofen (Advil, Motrin IB, others) or naproxen sodium (Aleve) can ease cramping and breast discomfort.",
                        "Diuretics. When exercise and limiting salt intake aren't enough to reduce the weight gain, swelling and bloating of PMS, taking water pills (diuretics) can help your body shed excess fluid through your kidneys. Spironolactone (Aldactone) is a diuretic that can help ease some of the symptoms of PMS.",
                        "Hormonal contraceptives. These prescription medications stop ovulation, which may bring relief from PMS symptoms."
                    ]
                }
            },
            {
                title: 'Endometriosis',
                article: "Endometriosis is one more medical condition which can cause abdominal pain in women. In this condition, uterine cells move out of the uterus into several other organs in the abdomen. These are the cells that are usually responsible for menstruation and when they move out of the wall of the uterus, can cause blood accumulation in that particular organ. This in turn leads to formation of blood clots and adhesions, which further leads to pain in the abdomen.",
                causes: [
                    "Cyclic changes in hormones. Signs and symptoms of premenstrual syndrome change with hormonal fluctuations and disappear with pregnancy and menopause.",
                    "Chemical changes in the brain. Fluctuations of serotonin, a brain chemical (neurotransmitter) that's thought to play a crucial role in mood states, could trigger PMS symptoms. Insufficient amounts of serotonin may contribute to premenstrual depression, as well as to fatigue, food cravings and sleep problems.",
                    "Depression. Some women with severe premenstrual syndrome have undiagnosed depression, though depression alone does not cause all of the symptoms"
                ],
                symptoms: [
                    {
                        pain: ['In muscle','Crampy','In pelvic','During periods','In lower back','During or after intercourse','During bowel movement'],
                        with: ['Fatique','Bloating','Breast Tenderness','Acne','Unusual bowel movements','Anxiety','Crying spells','Mood swings','Appetite change','Insomnia','Poor concentration','Alcohol intolerance']
                    }
                ],
                preventive_treatment: {
                    see_doctor_when: '',
                    diagnosis: [
                        "There are no unique physical findings or lab tests to positively diagnose premenstrual syndrome. Your doctor may attribute a particular symptom to PMS if it's part of your predictable premenstrual pattern.",
                    ],
                    treatments: [
                        "Antidepressants. Selective serotonin reuptake inhibitors (SSRIs) — which include fluoxetine (Prozac, Sarafem), paroxetine (Paxil, Pexeva), sertraline (Zoloft) and others — have been successful in reducing mood symptoms. SSRIs are the first line treatment for severe PMS or PMDD. These medications are generally taken daily. But for some women with PMS, use of antidepressants may be limited to the two weeks before menstruation begins.",
                        "Nonsteroidal anti-inflammatory drugs (NSAIDs). Taken before or at the onset of your period, NSAIDs such as ibuprofen (Advil, Motrin IB, others) or naproxen sodium (Aleve) can ease cramping and breast discomfort.",
                        "Diuretics. When exercise and limiting salt intake aren't enough to reduce the weight gain, swelling and bloating of PMS, taking water pills (diuretics) can help your body shed excess fluid through your kidneys. Spironolactone (Aldactone) is a diuretic that can help ease some of the symptoms of PMS.",
                        "Hormonal contraceptives. These prescription medications stop ovulation, which may bring relief from PMS symptoms."
                    ]
                }
            },
            {
                title: 'Ovarian Cyst',
                article: "A sac-like or cyst tumor in the ovary, which is usually benign, can be responsible for the abdominal pain, especially the lower abdominal pain in women.",
                causes: [
                    "Most ovarian cysts develop as a result of your menstrual cycle.",
                    "Follicular cyst: Around the midpoint of your menstrual cycle, an egg bursts out of its follicle and travels down the fallopian tube. A follicular cyst begins when the follicle doesn't rupture or release its egg, but continues to grow.",
                    "Corpus luteum cyst: When a follicle releases its egg, it begins producing estrogen and progesterone for conception. This follicle is now called the corpus luteum. Sometimes, fluid accumulates inside the follicle, causing the corpus luteum to grow into a cyst.",
                    "Dermoid cysts: Also called teratomas, these can contain tissue, such as hair, skin or teeth, because they form from embryonic cells. They're rarely cancerous.",
                    "Cystadenomas: These develop on the surface of an ovary and might be filled with a watery or a mucous material.",
                    "Endometriomas. These develop as a result of a condition in which uterine endometrial cells grow outside your uterus (endometriosis). Some of the tissue can attach to your ovary and form a growth."
                ],
                symptoms: [
                    {
                        pain: ['Dull','Sharp','In pelvic','During periods','In lower abdomen'],
                        with: ['Bloating']
                    }
                ],
                preventive_treatment: {
                    see_doctor_when: '',
                    diagnosis: [
                        "Ultrasound",
                        "Ultrasound",
                        "Blood test",
                        "Laparoscopy"
                    ],
                    treatments: [
                        "Watchful waiting: In many cases you can wait and be re-examined to see if the cyst goes away within a few months. This is typically an option — regardless of your age — if you have no symptoms and an ultrasound shows you have a simple, small, fluid-filled cyst.\nYour doctor will likely recommend that you get follow-up pelvic ultrasounds at intervals to see if your cyst changes in size.",
                        "Medication: Your doctor might recommend hormonal contraceptives, such as birth control pills, to keep ovarian cysts from recurring. However, birth control pills won't shrink an existing cyst.",
                        "Surgery: Your doctor might suggest removing a cyst that is large, doesn't look like a functional cyst, is growing, continues through two or three menstrual cycles, or causes pain."
                    ]
                }
            }
        ],
        common_causes: [
            'Infection ', 'Abnormal growths', 'Inflammation'
        ],
    }
]