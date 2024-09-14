interface CreateGoalRequest {
    title: string
    desiredWeeklyFrequency: number
}

export async function createGoal({title, desiredWeeklyFrequency}: CreateGoalRequest){
    await fetch('https://inorbit-server-8mmb0kt49-luscvs-projects.vercel.app/goals', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            desiredWeeklyFrequency
        })
    }) 
}