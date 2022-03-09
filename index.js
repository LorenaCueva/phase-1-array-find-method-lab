function superbowlWin(record){
        const item = (record.find(e => e.result === 'W'));
        if (item === undefined){
            return item;
        }
        else
            return item.year;
    }