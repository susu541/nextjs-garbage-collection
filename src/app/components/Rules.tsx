import React from 'react'
import { Rule } from '../type';
import { getWeekOfMonth } from '../util';
import { weekdays } from '../common/const';

interface RuleListProps {
    rules: Rule[];
}

const Rules = ({ rules }: RuleListProps) => {
  const today = new Date();
  const num = getWeekOfMonth(today);
  const key = weekdays[today.getDay()] + num;

  return (
    rules.map((rule) => {
      const list = rule.target.split(",");
      if (list.includes(key)){
        return <h1 className="text-4xl font-bold text-gray-700">{rule.type}</h1>
      };
    })
  )
}

export default Rules