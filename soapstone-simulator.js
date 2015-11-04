var prefixes;
var suffixCategories;
var suffixes;

var phraseText;

function create(game) {
	// Load phrase
	phraseText = document.getElementById("phraseText");

	// Load prefixes, suffixCategories, and suffixes divs	
	prefixes = document.getElementById("prefixes");
	suffixCategories = document.getElementById("suffixCategories");
	suffixes = document.getElementById("suffixes");

	for(var i = 0; i < game.prefixes.length; ++i)
	{
		// Create prefix divs
		var prefix = document.createElement("div");
		var prefixText = document.createTextNode(game.prefixes[i]);

		// Set ID
		prefix.id = "menuItem";

		// Make the index of the prefix a member of the element as well as the type
		// This is so that it can be accessed in the listener function
		prefix.index = i;
		prefix.prefixTypeIndex = game.prefixTypes[i];

		// Add the event listener
		prefix.addEventListener("click", function() {
			// Set the first part of the phrase
			phraseText.innerHTML = game.prefixes[this.index];

			clearSuffixes();
			clearSuffixCategories();

			if(this.prefixTypeIndex !== null)
			{
				// Load the suffix categories
				loadSuffixCategories(game, this.prefixTypeIndex, this.index);
			}
		}, false);

		// Append them
		prefix.appendChild(prefixText);
		prefixes.appendChild(prefix);
	}
}

function loadSuffixCategories(game, prefixTypeIndex, prefixIndex)
{
	suffixCategories.style.display = "block";

	for(var i = 0; i < game.suffixCategories.length; ++i)
	{
		var suffixCategory = document.createElement("div");
		var suffixCategoryText = document.createTextNode(game.suffixCategories[i]);

		suffixCategory.id = "menuItem";

		suffixCategory.prefixIndex = prefixIndex;
		suffixCategory.prefixTypeIndex = prefixTypeIndex;
		suffixCategory.index = i;

		suffixCategory.addEventListener("click", function() {
			clearSuffixes();

			loadSuffixCategory(game, this.prefixIndex, this.prefixTypeIndex, this.index);
		}, false);

		suffixCategory.appendChild(suffixCategoryText);
		suffixCategories.appendChild(suffixCategory);
	}
}

function loadSuffixCategory(game, prefixIndex, prefixTypeIndex, suffixCategoryIndex)
{
	suffixes.style.display = "block";

	for(var i = 0; i < game.suffixes[prefixTypeIndex][suffixCategoryIndex].length; ++i)
	{
		var suffix = document.createElement("div");
		var suffixText = document.createTextNode(game.suffixes[prefixTypeIndex][suffixCategoryIndex][i]);

		suffix.id = "menuItem";

		suffix.prefixIndex = prefixIndex;
		suffix.prefixTypeIndex = prefixTypeIndex;
		suffix.suffixCategoryIndex = suffixCategoryIndex
		suffix.index = i;

		suffix.addEventListener("mouseover", function() {
			phraseText.innerHTML = game.prefixes[this.prefixIndex].replace("****", game.suffixes[this.prefixTypeIndex][this.suffixCategoryIndex][this.index]);
		}, false);

		suffix.addEventListener("click", function() {
			reset();
		}, false);

		suffix.appendChild(suffixText);
		suffixes.appendChild(suffix);
	}
}

function displayPhrase()
{
	reset();
}

function clearSuffixCategories()
{
	// Clear the suffixCategories div if it has been filled
	if(suffixCategories !== undefined)
	{
		while(suffixCategories.firstChild)
		{
			suffixCategories.removeChild(suffixCategories.firstChild);
		}
	}

	suffixCategories.style.display = "none";
}

function clearSuffixes()
{
	// Clear the suffixes div if it has been filled
	if(suffixes !== undefined)
	{
		while(suffixes.firstChild)
		{
			suffixes.removeChild(suffixes.firstChild);
		}
	}	

	suffixes.style.display = "none";
}

function reset()
{
	clearSuffixCategories();
	clearSuffixes();
}
