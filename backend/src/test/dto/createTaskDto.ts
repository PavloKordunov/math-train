export class CreateTaskDto {
    id: string; 
    title: string;
    image?: string;
    type: string;
    answers: string[];
    pairs: string[];
    number: string
  }
  