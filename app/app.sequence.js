
exports.index = function(req, res) {
    
    var seqStr = req.body.sequenceStr; //validate if is null on frontend
    var seqStore = [];
    var seqCount;
	var seqRs = "";

    //find sequences
    for( i=0; i < seqStr.length; i++ ){

    	seqCount = 1;
    	if( (seqStr.charAt(i) === seqStr.charAt(parseInt(i)+1)) && (seqStr.charAt(i) !== seqStr.charAt(parseInt(i)-1)) ){
    		
    		//seqCount ++;
			for(x = 1; x <= (parseInt(seqStr.length) - i); x++ ){
		    	if( seqStr.charAt(i) === seqStr.charAt( parseInt(i) + parseInt(x) ) ){
					seqCount++;
		    	}else{
		    		break;
		    	}	
			}
			seqStore.push([i, seqCount]);
    	}
    }

    //calc result
    if(seqStore.length > 0){
		var arrPointSeq = 0; 
		var arrPointSeqCount = seqStore[0][1];

		for( i = 1; i < seqStore.length; i ++ ){
			if( arrPointSeqCount < seqStore[i][1] ){
				arrPointSeq = i;
			}
		}

		//result str
		var arrPointSeqNew = seqStore[arrPointSeq][0];	
	    for( i= 0; i < seqStore[arrPointSeq][1]; i++ ){
	    	seqRs += seqStr.charAt(arrPointSeqNew);    	
	    	arrPointSeqNew ++; 
	    }	    	
    }

	console.log(' Resultado: '+ seqRs);
    res.render('index', { sequenceRs : ' Resultado: '+ seqRs });


}	