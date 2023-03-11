
type projectProps = {
    title: string;
    description: string;
    img: string;
    techs: Array<string>
    link?:string;
  }

class ProjectModel{
    title:string;
    description:string;
    img:string;
    techs:Array<string>;
    link?:string;

    
    constructor({...props}:projectProps){
        this.title = props.title;
        this.description = props.description;
        this.img = props.img;
        this.techs = props.techs;
        this.link = props.link;
    }
}

export default ProjectModel;