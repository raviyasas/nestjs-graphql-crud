import { Field, ObjectType } from "@nestjs/graphql";
import { NoSpecialCharacters } from "src/common/decorators/special-characters.decorator";
import { BaseModel } from "src/common/models/base.model";
import { Column, Entity } from "typeorm";

@ObjectType()
@Entity('client')
export class Client extends BaseModel{

    @Field({nullable: true})
    @Column({
        name: 'client_name',
        type:'text',
        nullable: true
    })
    client_name: string;

    @Field({nullable: true})
    @Column({
        name: 'client_code',
        type:'text',
        nullable: true
    })
    client_code: string;

    @Field({nullable: true})
    @Column({
        name: 'client_description',
        type:'text',
        nullable: true
    })
    client_description: string;

    @Field()
    @Column({
        name: 'is_active',
        type:'boolean',
    })
    @NoSpecialCharacters
    is_active: boolean;
}