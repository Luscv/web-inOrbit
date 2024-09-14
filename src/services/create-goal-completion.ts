export async function createGoalCompletion(goalId: string){
    await fetch('https://inorbit-server-8mmb0kt49-luscvs-projects.vercel.app/completions', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            goalId,
        })
    }) 
}