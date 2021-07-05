export const data = [
    {
        causes: [
            {
                title: 'Heart Attack',
                article: 'The causes can include',
                causes: ['Block in the coronary artery due to cholesterol and/or plaque', 'Spasm of a coronary artery that shuts down blood flow to part of the heart muscle caused by use of substances like tobacco and cocaine'],
                symptoms: [
                    {
                        pain: ['Severe', 'Sudden','Sqeezing', 'Spreading to your neck', 'Spreading to jaw', 'Spreading to back'],
                        with: ['Pressure', 'Nausea', 'Indigestion', 'Heartburn', 'Abdominal pain', 'Shortness of breath', 'Cold sweat', 'Fatigue', 'Lightheadedness']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Electrocardiogram (ECG)', 'Blood tests', 'Chest x-ray', 'Coronary catheterization (angiogram)', 'Cardiac CT'],
                    treatments: ['Aspirin', 'Thrombolytics', 'Antiplatelet agents', 'Pain relievers', 'Beta blockers', 'Nitroglycerine', 'Coronary angioplasty (Stents)', 'Coronary artery bypass surgery']
                }
            },
            {
                title: 'Angina',
                article: 'Chest pain caused by blockages in the blood vessels leading to your heart',
                causes: ['Coronary artery disease (CAD)', 'Rupture in fatty deposits (plaques) in a blood vessel', 'Sudden spasm in a coronary artery'],
                symptoms: [
                    {
                        pain: ['Sqeezing',],
                        with: ['Lightheadedness', 'Fatigue', 'Nausea', 'Shortness of breath', 'Sweating', 'Burning','Pressure'],
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Electrocardiogram', 'Echocardiogram', 'Stress test', 'Blood test', 'Coronary angiography', 'CT Scan', 'Cardiac MRI'],
                    treatments: [
                        'Nitrates: Nitrates are often used to treat angina. Nitrates relax and widen your blood vessels, allowing more blood to flow to your heart muscle. You might take a nitrate when you have angina-related chest discomfort, before doing something that normally triggers angina (such as physical exertion) or on a long-term preventive basis. The most common form of nitrate used to treat angina is nitroglycerin tablets, which you put under your tongue.',
                        "Aspirin: Aspirin reduces the ability of your blood to clot, making it easier for blood to flow through narrowed heart arteries. Preventing blood clots can also reduce your risk of a heart attack. But don't start taking a daily aspirin without talking to your doctor first.",
                        "Clot-preventing drugs: Certain medications such as clopidogrel (Plavix), prasugrel (Effient) and ticagrelor (Brilinta) can help prevent blood clots from forming by making your blood platelets less likely to stick together. One of these medications may be recommended if you can't take aspirin.",
                        "Beta blockers: Beta blockers work by blocking the effects of the hormone epinephrine, also known as adrenaline. As a result, the heart beats more slowly and with less force, thereby reducing blood pressure. Beta blockers also help blood vessels relax and open up to improve blood flow, thus reducing or preventing angina.",
                        "Statins: Statins are drugs used to lower blood cholesterol. They work by blocking a substance your body needs to make cholesterol. They may also help your body reabsorb cholesterol that has accumulated in plaques in your artery walls, helping prevent further blockage in your blood vessels. Statins also have many other beneficial effects on your heart arteries.",
                        "Calcium channel blockers: Calcium channel blockers, also called calcium antagonists, relax and widen blood vessels by affecting the muscle cells in the arterial walls. This increases blood flow in your heart, reducing or preventing angina.",
                        "Blood pressure-lowering medications: If you have high blood pressure, diabetes, signs of heart failure or chronic kidney disease, your doctor will likely prescribe a medication to lower your blood pressure. There are two main classes of drugs to treat blood pressure: angiotensin-converting enzyme (ACE) inhibitors or angiotensin II receptor blockers (ARBs).",
                        "Ranolazine (Ranexa): Ranexa can be used alone or with other angina medications, such as calcium channel blockers, beta blockers or nitroglycerin.",
                    ]
                }
            },
            {
                title: 'Pericarditis',
                article: 'This is the inflammation of the sac around the heart',
                causes: ["Heart attack or heart surgery, which may trigger pericarditis or delayed pericarditis (Dressler's syndrome, also called postmyocardial infarction syndrome or post cardiac injury syndrome)", "Infection", "Systemic inflammatory disorders, including lupus and rheumatoid arthritis", "Trauma, such as injury to your heart or chest as a result of a motor vehicle or other accident", "Other health disorders, including kidney failure, AIDS, tuberculosis and cancer"],
                symptoms: [
                    {
                        pain: ['Behind the breastbone', 'In left side of your chest', 'Spreading to left shoulder', 'Spreading to your neck', 'Gets triggered when you cough', 'Gets triggered when you take a deep breath', 'Leaning forward makes it better'],
                        with: ['Abdominal swelling', "Leg swelling", 'Cough', 'Fatique', 'Weakness', 'Fever', 'Racing heartbeats', 'Shortness of breath when lying down']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Electrocardiogram', 'Echocardiogram', 'Chest X-ray', 'CT Scan', 'Cardiac MRI'],
                    treatments: ['Corticosteroids', 'Pain relievers', 'Pericardiocentesis', 'Pericardiectomy']
                }
            },
            {
                title: 'Myocarditis',
                article: 'This is an inflammation of the heart muscle',
                causes: ['Viruses', 'Bacteria', 'Parasites', 'Fungi', 'Chemical exposure', 'Side effects of certain medications'],
                symptoms: [
                    {
                        pain: ['In joints'],
                        with: ['Racing heartbeats', 'Shortness of breath', 'Leg swelling', 'Fluid retention', 'Ankles/Feet swelling', 'Fatigue', 'Headache', 'Body aches', 'Fever', 'Sore throat', 'Diarrhea']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Electrocardiogram', 'Echocardiogram', 'Chest X-ray', 'CT Scan', 'Cardiac MRI', 'Blood Tests'],
                    treatments: [
                        "Angiotensin-converting enzyme (ACE) inhibitors: These medications, such as enalapril (Vasotec), captopril (Capoten), lisinopril (Zestril, Prinivil) and ramipril (Altace), relax the blood vessels in your heart and help blood flow more easily.",
                        "Angiotensin II receptor blockers (ARBs): These medications, such as losartan (Cozaar) and valsartan (Diovan), relax the blood vessels in your heart and help blood flow more easily.",
                        "Beta blockers: Beta blockers, such as metoprolol (Lopressor, Toprol-XL), bisoprolol and carvedilol (Coreg), work in multiple ways to treat heart failure and help control arrhythmias.",
                        "Diuretics: These medications, such as furosemide (Lasix), relieve sodium and fluid retention."
                    ]
                }
            },
            {
                title: 'Cardiomyopathy',
                article: '',
                causes: ['Long-term high blood pressure', 'Heart tissue damage from a heart attack', "Long-term rapid heart rate", 'Heart valve problems', 'COVID-19 infection', 'Certain infections, especially those that cause inflammation of the heart', 'Metabolic disorders, such as obesity, thyroid disease or diabetes', 'Lack of essential vitamins or minerals in your diet, such as thiamin (vitamin B-1)', 'Iron buildup in your heart muscle (hemochromatosis)', 'The growth of tiny lumps of inflammatory cells (granulomas) in any part of your body, including your heart and lungs (sarcoidosis)', 'The buildup of abnormal proteins in the organs (amyloidosis)', 'Connective tissue disorders', 'Drinking too much alcohol over many years', 'Use of cocaine, amphetamines or anabolic steroids', 'Use of some chemotherapy drugs and radiation to treat cancer'],
                symptoms: [
                    {
                        pain: ['Symptoms other than pain'],
                        with: ['Shortness of breath', 'Leg swelling', 'Ankles/Feet swelling', 'Bloating', 'Cough', 'Difficulty lying down', 'Fatique', 'Racing heartbeats', 'Pressure', 'Lightheadedness']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Electrocardiogram', 'Echocardiogram', 'Chest X-ray', 'CT Scan', 'Cardiac MRI', 'Blood Tests', 'Stress test', 'Genetic screening'],
                    treatments: [
                        "Septal ablation: A small portion of the thickened heart muscle is destroyed by injecting alcohol through a long, thin tube (catheter) into the artery supplying blood to that area. This allows blood to flow through the area.",
                        "Radiofrequency ablation:  To treat abnormal heart rhythms, doctors guide long, flexible tubes (catheters) through your blood vessels to your heart. Electrodes at the catheter tips transmit energy to damage a small spot of abnormal heart tissue that is causing the abnormal heart rhythm.",
                        "Implantable cardioverter-defibrillator (ICD): This device monitors your heart rhythm and delivers electric shocks when needed to control abnormal heart rhythms. An ICD doesn't treat cardiomyopathy, but watches for and controls abnormal rhythms, a serious complication of the condition.",
                        "Ventricular assist device (VAD):  This helps blood flow through your heart. A VAD usually is considered after less invasive approaches are unsuccessful. It can be used as a long-term treatment or as a short-term treatment while waiting for a heart transplant.",
                        "Pacemaker: This small device placed under the skin in the chest or abdomen uses electrical impulses to control arrhythmias."
                    ]
                }
            },
            {
                title: 'Aortic Dissection',
                article: 'A rare condition involving a tear of the aorta, the large vessel that comes off of the heart',
                causes: ["Type A: This more common and dangerous type involves a tear in the part of the aorta where it exits the heart or a tear in the upper aorta (ascending aorta), which may extend into the abdomen.", "Type B: This involves a tear in the lower aorta only (descending aorta), which may also extend into the abdomen."],
                symptoms: [
                    {
                        pain: ['Severe', 'Sudden','Sqeezing', 'Spreading to your neck', 'Spreading to jaw', 'Spreading to back','Spreading to abdomen'],
                        with: ['Lightheadedness', 'Loss of consciousness', 'Shortness of breath', 'Weakness', 'Paralysis of one side of body', 'Loss of vision', 'Leg Pain']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: [
                        "Transesophageal echocardiogram (TEE): This test uses high-pitched sound waves to produce an image of the heart. A TEE is a special type of echocardiogram in which an ultrasound probe is inserted through the esophagus. The ultrasound probe is placed close to the heart and the aorta, providing a clearer picture of your heart than would a regular echocardiogram.",
                        "Computerized tomography (CT) scan: CT scanning generates X-rays to produce cross-sectional images of the body. A CT of the chest is used to diagnose an aortic dissection, possibly with an injected contrast liquid. Contrast makes the heart, aorta and other blood vessels more visible on the CT pictures.",
                        "Magnetic resonance angiogram (MRA): An MRI uses a magnetic field and pulses of radio wave energy to make pictures of the body. An MRA uses this technique to look at blood vessels."
                    ],
                    treatments: [
                        "Type A aortic dissection: \n\n Surgery: Surgeons remove as much of the dissected aorta as possible, block the entry of blood into the aortic wall and reconstruct the aorta with a synthetic tube called a graft. If the aortic valve leaks as a result of the damaged aorta, it may be replaced at the same time. The new valve is placed within the graft used to reconstruct the aorta.\nMedications: Some medications, such as beta blockers and nitroprusside (Nitropress), reduce heart rate and lower blood pressure, which can prevent the aortic dissection from worsening. They may be given to people with type A aortic dissection to stabilize blood pressure before surgery.",
                        "Type B aortic dissection: \n\n Medications: The same medications that are used to treat type A aortic dissection may be used without surgery to treat type B aortic dissections.\nSurgery: The procedure is similar to that used to correct a type A aortic dissection. Sometimes stents — small wire mesh tubes that act as a sort of scaffolding — may be placed in the aorta to repair complicated type B aortic dissections."
                    ]
                }
            },
            {
                title: 'Acid reflux:',
                article: '',
                causes: ['When you swallow, a circular band of muscle around the bottom of your esophagus (lower esophageal sphincter) relaxes to allow food and liquid to flow into your stomach. Then the sphincter closes again.\nIf the sphincter relaxes abnormally or weakens, stomach acid can flow back up into your esophagus. This constant backwash of acid irritates the lining of your esophagus, often causing it to become inflamed.'],
                symptoms: [
                    {
                        pain: ['After eating', 'Worst at night'],
                        with: ['Burning',]
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Endoscopy: to check for abnormalities in your esophagus. A tissue sample (biopsy) may be taken for analysis.',
                        'X-Rays: to view the shape and condition of your esophagus and stomach.',
                        'Ambulatory probe test: to identify when, and for how long, stomach acid backs up into your esophagus. An acid monitor that is placed in your esophagus connects to a small computer that you wear around your waist or on a strap over your shoulder.',
                        'Esophageal motility testing: to measure movement and pressure in your esophagus.'
                    ],
                    treatments: [
                        "Antacids, which help neutralize stomach acid. Antacids may provide quick relief. But they can't heal an esophagus damaged by stomach acid.",
                        "H-2-receptor antagonists (H2RAs), which can reduce stomach acid. H2RAs don't act as quickly as antacids, but may provide longer relief.",
                        "Proton pump inhibitors, such as lansoprazole (Prevacid 24HR) and omeprazole (Nexium 24HR, Prilosec OTC), which also can reduce stomach acid."
                    ]
                }
            },
            {
                title: 'Gallstones',
                article: '',
                causes: ['Your bile contains too much cholesterol. Normally, your bile contains enough chemicals to dissolve the cholesterol excreted by your liver. But if your liver excretes more cholesterol than your bile can dissolve, the excess cholesterol may form into crystals and eventually into stones.', "Your bile contains too much bilirubin. Bilirubin is a chemical that's produced when your body breaks down red blood cells. Certain conditions cause your liver to make too much bilirubin, including liver cirrhosis, biliary tract infections and certain blood disorders. The excess bilirubin contributes to gallstone formation.", "Your gallbladder doesn't empty correctly. If your gallbladder doesn't empty completely or often enough, bile may become very concentrated, contributing to the formation of gallstones."],
                symptoms: [
                    {
                        pain: ['Sudden', 'Severe', 'In upper right portion of abdomen', 'In center of abdomen, just below breastbone', 'In between your shoulder blades', 'In your right shoulder'],
                        with: ['Nausea']
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
            {
                title: 'Pneumonia',
                article: '',
                causes: [
                    "Bacteria: The most common cause of bacterial pneumonia in the U.S. is Streptococcus pneumoniae. This type of pneumonia can occur on its own or after you've had a cold or the flu. It may affect one part (lobe) of the lung, a condition called lobar pneumonia.",
                    "Bacteria-like organisms: Mycoplasma pneumoniae also can cause pneumonia. It typically produces milder symptoms than do other types of pneumonia. Walking pneumonia is an informal name given to this type of pneumonia, which typically isn't severe enough to require bed rest.",
                    "Fungi: This type of pneumonia is most common in people with chronic health problems or weakened immune systems, and in people who have inhaled large doses of the organisms. The fungi that cause it can be found in soil or bird droppings and vary depending upon geographic location.",
                    "Viruses, including COVID-19: Some of the viruses that cause colds and the flu can cause pneumonia. Viruses are the most common cause of pneumonia in children younger than 5 years. Viral pneumonia is usually mild. But in some cases it can become very serious. Coronavirus 2019 (COVID-19) may cause pneumonia, which can become severe."
                ],
                symptoms: [
                    {
                        pain: ['Gets triggered when you cough'],
                        with: ['Cough', 'Confusion or changes in mental awareness (age >= 65)', 'Fatigue', 'Fever', 'Sweating', 'Chills', 'Lower body temperature', 'Nausea', 'Vomiting', 'Diarrhea', 'Shortness of breath']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: [
                        "Blood tests: Blood tests are used to confirm an infection and to try to identify the type of organism causing the infection. However, precise identification isn't always possible.",
                        "Chest X-ray: This helps your doctor diagnose pneumonia and determine the extent and location of the infection. However, it can't tell your doctor what kind of germ is causing the pneumonia.",
                        "Pulse oximetry: This measures the oxygen level in your blood. Pneumonia can prevent your lungs from moving enough oxygen into your bloodstream.",
                        "Sputum test: A sample of fluid from your lungs (sputum) is taken after a deep cough and analyzed to help pinpoint the cause of the infection.",
                        "CT scan: If your pneumonia isn't clearing as quickly as expected, your doctor may recommend a chest CT scan to obtain a more detailed image of your lungs.",
                        "Pleural fluid culture: A fluid sample is taken by putting a needle between your ribs from the pleural area and analyzed to help determine the type of infection."
                    ],
                    treatments: [
                        "Antibiotics: These medicines are used to treat bacterial pneumonia. It may take time to identify the type of bacteria causing your pneumonia and to choose the best antibiotic to treat it. If your symptoms don't improve, your doctor may recommend a different antibiotic.",
                        "Cough medicine: This medicine may be used to calm your cough so that you can rest. Because coughing helps loosen and move fluid from your lungs, it's a good idea not to eliminate your cough completely. In addition, you should know that very few studies have looked at whether over-the-counter cough medicines lessen coughing caused by pneumonia. If you want to try a cough suppressant, use the lowest dose that helps you rest.",
                        "Fever reducers/pain relievers: You may take these as needed for fever and discomfort. These include drugs such as aspirin, ibuprofen (Advil, Motrin IB, others) and acetaminophen (Tylenol, others)."
                    ]
                }
            },
            {
                title: 'Viral bronchitis',
                article: 'It is an inflammation of the lining of your bronchial tubes',
                causes: ['Acute bronchitis is usually caused by viruses, typically the same viruses that cause colds and flu (influenza)'],
                symptoms: [
                    {
                        pain: ['Symptoms other than pain',],
                        with: ['Cough', 'Mucus', 'Fatique', 'Shortness of breath', 'Fever', 'Chills']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Chest X-ray', 'Sputum tests', 'Pulmonary function test'],
                    treatments: ['Cough medicine: If your cough keeps you from sleeping, you might try cough suppressants at bedtime.', 'Other medications: If you have allergies, asthma or chronic obstructive pulmonary disease (COPD), your doctor may recommend an inhaler and other medications to reduce inflammation and open narrowed passages in your lungs.']
                }
            },
            {
                title: 'Pneumothorax',
                article: 'Also known as a collapsed lung',
                causes: [
                    "Chest injury: Any blunt or penetrating injury to your chest can cause lung collapse. Some injuries may happen during physical assaults or car crashes, while others may inadvertently occur during medical procedures that involve the insertion of a needle into the chest.",
                    "Lung disease: Damaged lung tissue is more likely to collapse. Lung damage can be caused by many types of underlying diseases, such as chronic obstructive pulmonary disease (COPD), cystic fibrosis, lung cancer or pneumonia. Cystic lung diseases, such as lymphangioleiomyomatosis and Birt-Hogg-Dube syndrome, cause round, thin-walled air sacs in the lung tissue that can rupture, resulting in pneumothorax.",
                    "Ruptured air blisters: Small air blisters (blebs) can develop on the top of the lungs. These air blisters sometimes burst — allowing air to leak into the space that surrounds the lungs.",
                    "Mechanical ventilation: A severe type of pneumothorax can occur in people who need mechanical assistance to breathe. The ventilator can create an imbalance of air pressure within the chest. The lung may collapse completely."
                ],
                symptoms: [
                    {
                        pain: ['Sudden'],
                        with: ['Shortness of breath']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Chest X-ray', 'CT Scan'],
                    treatments: [
                        "Needle aspiration: A hollow needle with a small flexible tube (catheter) is inserted between the ribs into the air-filled space that's pressing on the collapsed lung. Then the doctor removes the needle, attaches a syringe to the catheter and pulls out the excess air. The catheter may be left in for a few hours to ensure the lung is re-expanded and the pneumothorax does not recur.",
                        "Chest tube insertion: A flexible chest tube is inserted into the air-filled space and may be attached to a one-way valve device that continuously removes air from the chest cavity until your lung is re-expanded and healed.",
                        "Using a substance to irritate the tissues around the lung so that they'll stick together and seal any leaks. This can be done through the chest tube, but it may be done during surgery.",
                        "Drawing blood from your arm and placing it into the chest tube. The blood creates a fibrinous patch on the lung (autologous blood patch), sealing the air leak.",
                        "Passing a thin tube (bronchoscope) down your throat and into your lungs to look at your lungs and air passages and placing a one-way valve. The valve allows the lung to re-expand and the air leak to heal."
                    ]
                }
            },
            {
                title: 'Pulmonary embolism',
                article: 'A blood clot that occurs in the lungs',
                causes: [''],
                symptoms: [
                    {
                        pain: ['Sharp', 'Gets triggered when you cough', 'Gets triggered when you take a deep breath', 'Gets triggered when you bend'],
                        with: ['Shortness of breath', , 'Cough', 'Racing heartbeats', 'Lightheadedness', 'Sweating', 'Fever', 'Leg pain', 'Leg swelling', 'Clammy or discolored skin (Cynosis)']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Blood test', 'Ultrasound', 'Chest X-ray', 'MRI', 'Pulmonary angiogram', 'Ventilation-perfusion scan'],
                    treatments: ['Blood thinners (anticoagulants)', 'Clot dissolvers (thrombolytics)', 'Surgical clot removal', 'Vein filter']
                }
            },
            {
                title: 'Bronchospasm',
                article: 'Tightening of the muscles that line the airways (bronchi) in your lungs',
                causes: ['Any swelling or irritation in your airways can cause bronchospasm. This condition commonly affects people with asthma.'],
                symptoms: [
                    {
                        pain: ['Symptoms other than pain'],
                        with: ['Wheezing (a whistling sound when you breathe)', 'Pressure', 'Cough', 'Fatique']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Electrocardiogram (ECG or EKG)', 'Blood tests', 'Chest X-ray', 'Echocardiogram', 'MRI', 'Stress test', 'Angiogram'],
                    treatments: ['Short acting bronchodilators', 'Long acting bronchodilators', 'Steroids']
                }
            },
            {
                title: 'Broken ribs',
                article: [],
                causes: ['Accidents/injuries'],
                symptoms: [
                    {
                        pain: ['Gets triggered when you take a deep breath', 'Gets triggered when you press on an area (injured)', 'Gets triggered when you bend'],
                        with: ['Only Pain']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Chest X-ray', 'CT scan', 'MRI'],
                    treatments: ['Restricting activity', 'Icing the area', 'See a doctor']
                }
            },
            {
                title: 'Sore muscles from repetitive action',
                article: ['Gets triggered when you take a deep breath', 'Gets triggered when you press on an area (injured)', 'Gets triggered when you bend'],
                causes: ['Muscle strains can result from repetitive injuries when you stress a muscle by doing the same motion over and over.'],
                symptoms: [
                    {
                        pain: ['Tender'],
                        with: ['Redness or bruising', 'Limited motion', 'Muscle spasms', 'Swelling', 'Weakness']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['During the physical exam, your doctor will check for swelling and points of tenderness. The location and intensity of your pain can help determine the extent and nature of the damage.', 'Physical exam'],
                    treatments: [
                        "Rest: Avoid activities that cause pain, swelling or discomfort. But don't avoid all physical activity.",
                        "Ice: Even if you're seeking medical help, ice the area immediately. Use an ice pack or slush bath of ice and water for 15 to 20 minutes each time and repeat every two to three hours while you're awake for the first few days after the injury.",
                        "Compression: To help stop swelling, compress the area with an elastic bandage until the swelling stops. Don't wrap it too tightly or you may hinder circulation. Begin wrapping at the end farthest from your heart. Loosen the wrap if the pain increases, the area becomes numb or swelling is occurring below the wrapped area.",
                        "Elevation: Elevate the injured area above the level of your heart, especially at night, which allows gravity to help reduce swelling."
                    ]
                }
            },
            {
                title: 'Fractures',
                article: [],
                causes: ['Injury/fall'],
                symptoms: [
                    {
                        pain: ['Tender','Gets triggered when you press on an area (injured)', 'Gets triggered when you bend'],
                        with: ['Swelling']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['X-ray', 'CT scan'],
                    treatments: [
                        "Splint/cast (immobilizes the injured area to promote bone alignment and healing to protect the injured area from motion or use)",
                        "Medication (to control pain)",
                        "Traction",
                        "Surgery"
                    ]
                }
            },
        ]
    }
]