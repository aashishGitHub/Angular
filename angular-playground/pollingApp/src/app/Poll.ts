export interface Poll{

    id: number,
    title: string,
    publishedDate: number,
    answer: Answer
}

export interface Answer{
    type: string,
    options: Option[];
}

export interface Option{
    id: number,
    label: string
}