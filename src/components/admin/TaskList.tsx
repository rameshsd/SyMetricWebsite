
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const tasks = [
  { text: 'Finish Dashboard Design', done: true },
  { text: 'Fix Issue #74', done: true },
  { text: 'Publish version 2.3.3', done: true },
];

export function TaskList() {
  return (
    <Card className="bg-blue-600 text-white">
      <CardContent className="p-6">
        <div className="flex items-start">
            <div className="w-2/5">
                <h3 className="text-xl font-bold">Good Job, David!</h3>
                <p className="text-sm text-blue-200 mt-1">You've finished all of your tasks for this week.</p>
            </div>
          <div className="w-3/5 pl-4">
            <ul className="space-y-3">
              {tasks.map((task, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-300 mr-3" />
                  <span className={task.done ? 'line-through text-blue-200' : ''}>{task.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
