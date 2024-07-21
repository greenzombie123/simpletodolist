export interface EventEmitter {
    on: (event: string, callBack: Function) => void
    emit: (event: string, eventData?: Object) => void
    reset:()=>void
}

export interface EventHandlers {
    [name: string]: Function[]
}

export interface EventData {
    eventData: any
}

export const EventEmitter = ((): EventEmitter => {
    let eventHandlers: EventHandlers = {}

    function on(event: string, callBack: Function) {

        if (event in eventHandlers) {
            eventHandlers[event].push(callBack)
        }
        else {
            eventHandlers[event] = []
            eventHandlers[event].push(callBack)
        }
    }

    function emit(event: string, eventData?: Object) {
        for (const key in eventHandlers) {
            if (key === event) {
                eventHandlers[key].forEach(callBack => callBack(eventData))
            }
        }
    }

    function reset(){
        eventHandlers = {}
    }

    return { on, emit, reset }
})()

// EventEmitter.on("fart", () => console.log(12))
// EventEmitter.on("fart", () => console.log(14))
// EventEmitter.on("fart", (e: EventData) => console.log(e.eventData.f))
// EventEmitter.on("wow", (e: EventData) => console.log(e.eventData.f + true))


// EventEmitter.emit("fart", {eventData:{f:"STRING"}})
// EventEmitter.emit("wow", {eventData:{f:"KEL"}})


