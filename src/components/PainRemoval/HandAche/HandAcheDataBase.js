export const data = [
    {
        causes: [
            {
                title: 'Arthritis',
                article: 'Arthritis is the swelling and tenderness of one or more joints and it is the leading cause of hand pain. While it can happen anywhere in the body, it is most common in the hands and wrists. The most common types of arthritis are osteoarthritis and rheumatoid arthritis.',
                causes: ['Osteoarthritis: Wear and tear to cartilages of joints resulting in bone grinding on bone.', 'Rheumatoid arthritis: Immune system attacks the lining of the joint capsule. As a result the lining becomes inflamed and swollen.'],
                symptoms: [
                    {
                        pain: ['Stiff', 'Dull', 'Burning'],
                        with: ['Swelling', 'Redness', 'Limited motion']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['X-Rays', 'CT Scans', 'MRI Scans', 'Ultrasound'],
                    treatments: ['Painkillers', 'Nonsteroidal anti-inflammatory drugs (NSAIDs)', 'Counterirritants', 'Disease modifying antirheumatic drugs (DMARDs)', 'Corticosteroids', 'Surgery', 'Physical therapy']
                }
            },
            {
                title: 'De Quervain’s tenosynovitis',
                article: 'Swelling in the two tendons around the base of your thumb causes the area around your tendons to become inflamed. This inflammation puts pressure on nearby nerves, causing pain and numbness around the base of your thumb.',
                causes: ['Chronic overuse', 'Repetitive motion', 'Injury', 'Rheumatoid arthritis'],
                symptoms: [
                    {
                        pain: ['Near base of thumb'],
                        with: ['Swelling', 'Limited motion']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Physical Examination by a doctor.', 'Finklestein test (bending the thumb across the palm of your hand and bending your fingers down over your thumb followed by bending your wrist toward your little finger)'],
                    treatments: ['Immobilizing the thumb and wrist', 'Avoiding repetitive movement', 'Cold packs', 'Physical therapy', 'Exercise', 'Surgery', 'Painkillers']
                }
            },
            {
                title: 'Carpal Tunnel Syndrome',
                article: 'Carpal tunnel syndrome occurs when the median nerve (a nerve running from forearm to the palm) gets squeezed by a narrowing carpal tunnel.',
                causes: ['Increased pressure on the median nerve', 'Fracture or dislocation ', 'Obesity', 'Rheumatoid arthritis', 'Thyroid disorders'],
                symptoms: [
                    {
                        pain: ['Comes at night', 'Radiating', 'Intermittent'],
                        with: ['Tingling', 'Numbness', 'Weakness', 'Decreased grip strength']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Physical examination', 'X-Ray', 'Electromyography', 'Nerve conduction study'],
                    treatments: ['Wrist splinting', 'Cold press', 'Nonsteroidal anti-inflammatory drugs (NSAIDs)', 'Corticosteroids', 'Surgery', 'Exercise']
                }
            },
            {
                title: 'Ganglion cysts',
                article: 'Ganglion cysts are lumps that most commonly develop in the wrist. They are typically round or oval and are filled with a jelly-like fluid.',
                causes: ['Not known'],
                symptoms: [
                    {
                        pain: ['In lump'],
                        with: ['A lump <2.5 cm in diameter']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['X-Rays', 'Physical exam'],
                    treatments: ['Immobilization', 'Draining the fluid from the cyst in a procedure called aspiration', 'Surgery']
                }
            },
            {
                title: 'Gout',
                article: 'It is an extreme form of arthritis.',
                causes: ['Accumulation of urate crystals in joints'],
                symptoms: [
                    {
                        pain: ['Intense', 'In the joints'],
                        with: ['Lingering discomfort', 'Limited motion', 'Inflammation']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Joint fluid test', 'Blood test', 'Dual-energy computerised tomography', 'Ultrasound', 'X-Rays'],
                    treatments: ['Nonsteroidal anti-inflammatory drugs (NSAIDs)', 'Colchicine', 'Corticosteroids', 'Medication to improve uric acid removal']
                }
            },
            {
                title: 'Lupus',
                article: 'An autoimmune disease that causes inflammation and pain',
                causes: ['Sunlight exposure', 'Infections', 'Medication side-effects'],
                symptoms: [
                    {
                        pain: ['In the joints', 'Stiff'],
                        with: ['Fatigue', 'Chest pain', 'Swelling']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Complete blood count', 'Erythrocyte sedimentation rate', 'Urine analysis', 'Antinuclear antibody test', 'ECG', 'Biopsy'],
                    treatments: ['Nonsteroidal anti-inflammatory drugs (NSAIDs)', 'Antimalarial drugs', 'Corticosteroids', 'Immunosuppressants']
                }
            },
            {
                title: 'Peripheral neuropathy',
                article: 'It refers to a problem with the peripheral nerves. These nerves send messages from the central nervous system, the brain and the spinal cord to the rest of the body. \nParalysis is a symptom if motor nerves are affected.',
                causes: ['Autoimmune disease', 'Diabetes', 'Tumors', 'Bone marrow disorders', 'Hereditary disorders'],
                symptoms: [
                    {
                        pain: ['Sharp', 'Jabbing', 'Throbbing', 'Burning'],
                        with: ['Sensitive', 'Numbness', 'Tingling', 'Lack of coordination', 'Weakness', 'Feeling as if wearing gloves', 'Paralysis']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Full medical history', 'Neurological examination', 'Blood tests', 'Imaging tests', 'Electromyography', 'Nerve Biopsy'],
                    treatments: ['Pain relievers', 'Anti-seizure medication', 'Topical treatments', 'Antidepressants', 'Transcutaneous electrical nerve stimulation (TENS)', 'Physical therapy']
                }
            },
            {
                title: 'Raynaud’s Phenomenon',
                article: 'It refers to certain areas becoming numb when exposed to cold',
                causes: ['Blood vessels in spasm', 'Carpal tunnel syndrome', 'Repetitive action', 'Disease of arteries', 'Injury'],
                symptoms: [
                    {
                        pain: ['Symptom other than pain'],
                        with: ['Cold fingers and/or toes', 'Change in skin colour', 'Numbness upon exposure to warmth']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Antinuclear antibodies test', 'Erythrocyte sedimentation rate test'],
                    treatments: ['Vasodilators', 'Calcium channel blockers', 'Surgery']
                }
            },
            {
                title: 'Stenosing tenosynovitis',
                article: 'A painful condition that occurs when your finger or thumb gets stuck in a bent position',
                causes: ["Finger's tendon sheath becomes irritated and inflamed", 'Repeated gripping', 'Carpal tunnel syndrome'],
                symptoms: [
                    {
                        pain: ['Stiff', 'In the morning', 'Tender'],
                        with: ['A popping or clicking sensation when moved', 'A bump at the base of finger', 'Locked finger in bent position']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Physical examination'],
                    treatments: ['Rest', 'Wrist splint', 'Stretching exercise']
                }
            }
        ]
    }
]