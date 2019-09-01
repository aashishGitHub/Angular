export interface AppPollResult{
id: number,
votesCount: number,
options: option[]
}

export interface option{
id: number,
count: number
}