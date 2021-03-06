import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {BaseResource} from "./BaseResource";
import {Expose} from "class-transformer";
import {scramble} from "../Functions/scramble";
import {Question} from "./Question";
import {BeforeUpdate} from "typeorm/index";

@Entity()
export class Answer extends BaseResource {

    @Expose({groups: ['answered']})
    @Column({nullable: true})
    value: string;

    @Expose({groups: ['unanswered']})
    @Column({nullable: true})
    scrambled: string;

    @BeforeUpdate()
    scramble() {
        this.scrambled = scramble(this.value);
    }

    @ManyToOne(() => Question, question => question.answers, { onDelete: 'CASCADE' })
    @JoinColumn({name: 'question_id', referencedColumnName: 'id'})
    question: Question
}
