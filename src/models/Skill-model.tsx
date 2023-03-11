


interface SkillProps {
    name: string;
    exp: 0.5 | 1 | 1.5 | 2;
    img: string;
}

class SkillModel{
    name: string;
    exp: 0.5 | 1 | 1.5 | 2;
    img: string;

    constructor({...props}:SkillProps){
        this.name = props.name;
        this.exp = props.exp;
        this.img = props.img;
    }
}
export default SkillModel;