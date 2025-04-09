import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from 'class-validator';
  
  @ValidatorConstraint({ async: false })
  export class SpecialCharactersCheckConstraint implements ValidatorConstraintInterface {
    validate(value: string) {
      return /^[a-zA-Z0-9 ]*$/.test(value); 
    }
  
    defaultMessage() {
      return 'String contains special characters!';
    }
  }
  
  export function NoSpecialCharacters(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: NoSpecialCharactersConstraint,
      });
    };
  }
  