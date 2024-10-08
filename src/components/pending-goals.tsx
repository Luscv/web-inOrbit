import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { getWeekPendingGoals } from "../services/get-pending-goals";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createGoalCompletion } from "../services/create-goal-completion";

export function PendingGoals() {
    const queryClient = useQueryClient()

    const { data } = useQuery({
        queryKey: ['pending-goals'],
        queryFn: getWeekPendingGoals,
    })

    if(!data){
        return null
    }

    async function handleCompleteGoal(goalId: string) {
        await createGoalCompletion(goalId)
        queryClient.invalidateQueries({queryKey: ['summary']})
        queryClient.invalidateQueries({queryKey: ['pending-goals']})
    }

    return (
        <div className="flex gap-3 flex-wrap">
            {data.map((goal) => {
                return (
                    <OutlineButton 
                        key={goal.id} 
                        disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
                        onClick={() => handleCompleteGoal(goal.id)}
                    >
                        <Plus className="size-4 text-zinc-600"/>
                        {goal.title}
                    </OutlineButton>
                )
            })}
        </div>
    )
}