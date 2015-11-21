var prefixes;
var suffixCategories;
var suffixes;

var phraseText;

function create(game) {
	// Load phrase div
	phraseText = document.getElementById("phraseText");

	// Load prefixes, suffixCategories, and suffixes tables	
	prefixes = document.getElementById("prefixes");
	suffixCategories = document.getElementById("suffixCategories");
	suffixes = document.getElementById("suffixes");

	for(var i = 0; i < game.prefixes.length; ++i)
	{
		// Create prefix row and data elements
		var prefix = document.createElement("tr");
		var prefixText = document.createElement("td");

		// Assign it text
		prefixText.innerHTML = game.prefixes[i];

		// Set class
		prefixText.className = "menuItem";

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
	// Unhide
	suffixCategories.style.display = "block";

	for(var i = 0; i < game.suffixCategories.length; ++i)
	{
		// Create suffixCategory row and data elements
		var suffixCategory = document.createElement("tr");
		var suffixCategoryText = document.createElement("td");

		// Assign it text
		suffixCategoryText.innerHTML = game.suffixCategories[i];

		// Set class
		suffixCategoryText.className = "menuItem";

		// Make the prefix index, type index, and category index members of the element
		suffixCategory.prefixIndex = prefixIndex;
		suffixCategory.prefixTypeIndex = prefixTypeIndex;
		suffixCategory.index = i;

		// click listener for it
		suffixCategory.addEventListener("click", function() {
			// Clear the suffix div if it has anything in it
			clearSuffixes();

			// Load the category
			loadSuffixCategory(game, this.prefixIndex, this.prefixTypeIndex, this.index);
		}, false);

		// Append elements
		suffixCategory.appendChild(suffixCategoryText);
		suffixCategories.appendChild(suffixCategory);
	}
}

function loadSuffixCategory(game, prefixIndex, prefixTypeIndex, suffixCategoryIndex)
{
	// Unhide it
	suffixes.style.display = "block";

	for(var i = 0; i < game.suffixes[prefixTypeIndex][suffixCategoryIndex].length; ++i)
	{
		// Create suffix row and data elements
		var suffix = document.createElement("tr");
		var suffixText = document.createElement("td");

		// Assign it text
		suffixText.innerHTML = game.suffixes[prefixTypeIndex][suffixCategoryIndex][i];

		// Set class
		suffixText.className = "menuItem";

		// Make the prefix index, type index, category index, and suffix index members of the element
		suffix.prefixIndex = prefixIndex;
		suffix.prefixTypeIndex = prefixTypeIndex;
		suffix.suffixCategoryIndex = suffixCategoryIndex
		suffix.index = i;

		// Mouseover listener for the phrase
		suffix.addEventListener("mouseover", function() {
			// Set the phrase text to the option being moused over
			phraseText.innerHTML = game.prefixes[this.prefixIndex].replace("****", game.suffixes[this.prefixTypeIndex][this.suffixCategoryIndex][this.index]);
		}, false);

		// Click listener
		suffix.addEventListener("click", function() {
			// Reset the menus
			reset();
		}, false);

		// Append elements
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
