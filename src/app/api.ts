import { Rule } from "./type";

export const getAll = async (): Promise<Rule[]> => {
    const res = await fetch(`http://localhost:3001/rules`, { cache: 'no-cache' });
    const todos = res.json();

    return todos;
}