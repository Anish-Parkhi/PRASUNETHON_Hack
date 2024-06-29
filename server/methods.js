function createNoticeID(){
    let num = Math.floor(Math.random()*10000)
    const prefix = "NOT"
    let newID = prefix + num.toString()
    return newID
}

function createEmergencyID(){
    let num = Math.floor(Math.random()*10000)
    const prefix = "EME"
    let newID = prefix + num.toString()
    return newID
}

function orderID(){
    let num = Math.floor(Math.random()*10000)
    const prefix = "ORD"
    let newID = prefix + num.toString()
    return newID
}

module.exports = {
    createNoticeID,
    createEmergencyID,
    orderID
}