const peopleNames=require("../country/state/city/index");
const get FirstNames=require("../utilities/utils/index");
const getPeopleInCity=(peopleNames)=> {
    return getFirstNames(peopleNames);
};
module.exports=getPeopleInCity;
