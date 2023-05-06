// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів

interface ICore {
    flight: number;
    core: {
        reuse_count: number;
        status: string;
    }
}

interface IPayload {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}

interface IMission {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    },
    links: {
        article_link: string;
        video_link: string;
    },
    rocket: {
        rocket_name: string;
        first_stage: {
            cores: ICore[];
        },
        second_stage: {
            payloads: IPayload[];
        };
    };
}

const mission: IMission = {
    mission_name: 'sedf',
    launch_date_local: 'sdf',
    launch_site: {site_name_long: 'xxx'},
    links: {
        article_link: 'cxv',
        video_link: 'xcv',
    },
    rocket: {
        rocket_name: 'ddd',
        first_stage: {
            cores: [{
                flight: 4,
                core: {
                    reuse_count: 5,
                    status: 'dfd'
                }
            }],
        },
        second_stage: {
            payloads: [{
                payload_type: 'sad',
                payload_mass_kg: 34,
                payload_mass_lbs: 34,
            },
                {
                    payload_type: 'xxx',
                    payload_mass_kg: 5,
                    payload_mass_lbs: 5,
                },{
                    payload_type: 'xxx',
                    payload_mass_kg: 5,
                    payload_mass_lbs:5,
                },{
                    payload_type: 'xxx',
                    payload_mass_kg: 5,
                    payload_mass_lbs: 5
                }
            ],
        },
    },
};


