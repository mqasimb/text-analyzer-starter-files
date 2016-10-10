// your code here!
$(document).ready(function() {
	$("button").click(function() {
		var inputval = $("textarea").val();
		if(inputval) {
			$("button").attr("type","button");
			$("dl").removeClass("hidden");
			var inputArray = createArray(inputval);
			$("dd.js-word-count").text(wordCount(inputArray));
			$("dd.js-unique-word").text(uniqueWordCount(inputArray));
			$("dd.js-word-length").text(averageWordLength(inputArray)+" characters");
			$("dd.js-sentence-length").text(averageSentenceLength(inputval)+ " words");
		}
		else {
			$("button").attr("type","submit");
			$("dl").addClass("hidden");
		}
	});
});
function createArray(inputval) {
	return inputval.split(" ");
}
function wordCount(inputArray) {
	return inputArray.length;
};

function uniqueWordCount(inputArray) {
	var inputObject = {};
	var uniqueCount = 0;
	for(var i=0; i<inputArray.length; i++) {
		inputObject[inputArray[i]] = inputArray[i];
	}
	for(var key in inputObject) {
		uniqueCount += 1;
	}
	return uniqueCount;
};
function averageWordLength(inputArray) {
	return (inputArray.map(function(item) {
		return item.length;
	}).reduce(function(a,b) {
		return a+b;
	}))/inputArray.length;

};
function averageSentenceLength(inputval) {
	var inputSentences = inputval.split("\n");
	return (inputSentences.map(function(item) {
		return item.length;
	}).reduce(function(a,b) {
		return a+b;
	}))/inputSentences.length;
};