/*
 * Copyright (c) 2010 M. Kolodny
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/kolodny
*/

jQuery.fn.save=function(a){
	return jQuery[a || '$'] = this;
};