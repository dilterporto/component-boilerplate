import Service from './_service';

export default class Component implements Unio.Controls.IComponent {
    
    public myTypes: Unio.Controls.IType[];

    public doNothing(myParam: boolean) {
        console.log(`doing nothing...${myParam}`)
    }

    constructor(service: Service) {
        
        // calling a service
        service.doAnything({ description: 'I am a param' });

    }
}