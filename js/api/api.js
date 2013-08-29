/**
 *	Piecemaker 2 API client (JavaScript version) for Motion Bank.
 *
 *	See:
 *	  https://github.com/motionbank/piecemaker2-api
 *	  https://github.com/motionbank/piecemaker-api-client
 *
 *	Project:
 *	  http://piecemaker.org
 *	  http://motionbank.org
 *
 *	Version: 0.0.3, build: 728
 */
var PieceMakerApi=function(){var g=function(){},l=function(a){if(!a||"object"!==typeof a)return a;if("entrySet"in a&&"function"===typeof a.entrySet){var b=a.entrySet();if(!b)return a;a={};for(b=b.iterator();b.hasNext();){var c=b.next(),e=c.getValue();e&&("object"===typeof e&&"entrySet"in e&&"function"===typeof e.entrySet)&&(e=l(e));var d=c.getKey();if(!d)throw"Field key is not valid: "+d;a[c.getKey()]=e}return a}"utc_timestamp"in a&&(a.utc_timestamp=m(a.utc_timestamp));"created_at"in a&&(a.created_at=
    m(a.created_at));return a},n=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(i(j(a[c])));return b}return a},j=function(a){var b=a.event;b.fields={};for(var c=0,a=a.fields;c<a.length;c++)b.fields[a[c].id]=a[c].value;return b},i=function(a){a.fields.get=function(b){return a.fields[b]};a.utc_timestamp=new Date(1E3*a.utc_timestamp);return a},m=function(a){return a instanceof Date?a.getTime()/1E3:9999999999<a?a/1E3:a},o=function(a,b,c,e,r){if(!d.api_key&&!b.match(/\/user\/login$/))throw"PieceMakerApi: need an API_KEY, please login first to obtain one";
    var f=(new Date).getTime(),g=b+".json";jQuery.ajax({url:g,type:c,dataType:"json",data:e,context:a,success:function(){arguments&&(arguments[0]&&"object"===typeof arguments[0]&&!(arguments[0]instanceof Array)&&!("queryTime"in arguments[0]))&&(arguments[0].queryTime=(new Date).getTime()-f);r.apply(a,arguments)},error:function(a){var b=-1,e="";a&&(b=a.status,e=a.statusText,a.responseText&&(e+=" "+a.responseText));if(d.context&&"piecemakerError"in d.context&&"function"==typeof d.context.piecemakerError)d.context.piecemakerError(b,
        e,c.toUpperCase()+" "+g);else throw a;},headers:{"X-Access-Key":d.api_key}})},h=function(a,b){o(a,b.url,"get",b.data,b.success)},p=function(a,b){o(a,b.url,"put",b.data,b.success)},k=function(a,b){o(a,b.url,"post",b.data,b.success)},q=function(a,b){o(a,b.url,"delete",null,b.success)},d,f=function(){this.context=this.api_key=this.base_url=void 0;var a=arguments[0];if(1==arguments.length&&"object"==typeof a)this.context=a.context||{},this.base_url=a.base_url||"http://localhost:3000";else if(1<=arguments.length&&
    "object"==typeof arguments[0]&&(this.context=arguments[0]),2<=arguments.length&&"string"==typeof arguments[1])this.base_url=arguments[1];this.base_url+="/api/v1";d=this};f.prototype.login=function(a,b,c){var e=c||g;if(!a||!b)throw"PieceMakerApi: need name and password to log user in";var d=this;k(this,{url:d.base_url+"/user/login",data:{email:a,password:b},success:function(a){var b=null;a&&("api_access_key"in a&&a.api_access_key)&&(d.api_key=a.api_access_key,b=d.api_key);e.call(d.context||c,b)}})};
    f.prototype.logout=function(a){var b=a||g,c=this;k(this,{url:c.base_url+"/user/logout",success:function(e){e&&("api_access_key"in e&&e.api_access_key)&&(c.api_key=e.api_access_key);b.call(c.context||a,null)}})};f.prototype.listUsers=function(a){var b=a||g,c=this;h(this,{url:c.base_url+"/users",success:function(e){b.call(c.context||a,e)}})};f.prototype.whoAmI=function(a){var b=a||g,c=this;h(this,{url:c.base_url+"/user/me",success:function(e){b.call(c.context||a,e)}})};f.prototype.createUser=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            b,c,e){var d=e||g,f=this;k(f,{url:f.base_url+"/user",data:{name:a,email:b,is_super_admin:c},success:function(a){d.call(f.context||e,a)}})};f.prototype.getUser=function(a,b){var c=b||g;h(this,{url:d.base_url+"/user/"+a,success:function(a){c.call(d.context||b,a)}})};f.prototype.updateUser=function(a,b,c,e,d,f){var h=f||g,i=this;p(i,{url:i.base_url+"/user/"+a,data:{name:b,email:c,password:e,api_access_key:d},success:function(a){h.call(i.context||f,a)}})};f.prototype.deleteUser=function(a,b){var c=b||
        g;q(this,{url:d.base_url+"/user/"+a,success:function(){c.call(d.context||b)}})};f.prototype.listGroups=function(a){var b=a||g;h(this,{url:d.base_url+"/groups",success:function(c){b.call(d.context||a,c)}})};f.prototype.createGroup=function(a,b,c){var e=c||g,d=this;if(!a)throw"createGroup(): title can not be empty";k(d,{url:d.base_url+"/group",data:{title:a,text:b||""},success:function(a){e.call(d.context||c,a)}})};f.prototype.getGroup=function(a,b){var c=b||g;h(this,{url:d.base_url+"/group/"+a,success:function(a){c.call(d.context||
        b,a)}})};f.prototype.updateGroup=function(a,b,c){var b=l(b),e=c||g,d=this;p(d,{url:d.base_url+"/group/"+a,data:b,success:function(a){e.call(d.context||c,a)}})};f.prototype.deleteGroup=function(a,b){var c=b||g;q(this,{url:d.base_url+"/group/"+a,success:function(){c.call(d.context||b)}})};f.prototype.listGroupUsers=function(a,b){var c=b||g;h(this,{url:d.base_url+"/group/"+a+"/users",success:function(a){c.call(d.context||b,a)}})};f.prototype.listEvents=function(a,b){var c=b||g;h(this,{url:d.base_url+
        "/group/"+a+"/events",success:function(a){c.call(d.context||b,n(a))}})};f.prototype.listEventsOfType=function(a,b,c){var e=c||g;h(this,{url:d.base_url+"/group/"+a+"/events",data:{type:b},success:function(a){e.call(d.context||c,n(a))}})};f.prototype.listEventsWithFields=function(){var a=arguments[0],b={};if(3<arguments.length)for(var c=1;c<arguments.length-1;c+=2)b[arguments[c]]=arguments[c+1];else if("object"===typeof arguments[1])for(c in arguments[1])arguments[1].hasOwnProperty(c)&&(b[c]=arguments[1][c]);
    else throw"Wrong parameter count";var e=arguments[arguments.length-1],f=e||g;h(d,{url:d.base_url+"/group/"+a+"/events",data:{field:b},success:function(a){f.call(d.context||e,n(a))}})};f.prototype.listEventsBetween=function(a,b,c,e){var f=e||g;h(d,{url:d.base_url+"/group/"+a+"/events",data:{from:m(b),to:m(c)},success:function(a){f.call(d.context||e,n(a))}})};f.prototype.getEvent=function(a,b,c){var e=c||g;h(d,{url:d.base_url+"/event/"+b,success:function(a){e.call(d.context||c,i(j(a)))}})};f.prototype.createEvent=
        function(a,b,c){var b=l(b),e=c||g;k(this,{url:d.base_url+"/group/"+a+"/event",data:b,success:function(a){e.call(d.context||c,i(j(a)))}})};f.prototype.updateEvent=function(a,b,c,e){c=l(c);c.event_group_id=a;var f=e||g;p(this,{url:d.base_url+"/event/"+b,data:c,success:function(a){f.call(d.context||e,i(j(a)))}})};f.prototype.deleteEvent=function(a,b,c){var e=c||g;"object"===typeof b&&"id"in b&&(b=b.id);q(this,{url:d.base_url+"/event/"+b,success:function(a){e.call(d.context||c,i(j(a)))}})};f.prototype.getSystemTime=
        function(a){var b=a||g;h(this,{url:d.base_url+"/system/utc_timestamp",success:function(c){b.call(d.context||a,new Date(1E3*c.utc_timestamp))}})};f.prototype.createCallback=function(){if(1==arguments.length)return d.context[arguments[0]];if(2<=arguments.length){var a=1,b=d.context,c=arguments[0];if("string"!==typeof arguments[0]){b=arguments[0];if("string"!==typeof arguments[1])throw"createCallback(): if first argument is a target then the second needs to be a method name";c=arguments[1];a=2}if(arguments.length>
        a){for(var e=[];a<arguments.length;a++)e.push(arguments[a]);var f=b,g=c;return function(a){a&&e.unshift(a);f[g].apply(f,e)}}return b[c]}throw"createCallback(): wrong number of arguments";};return f}();