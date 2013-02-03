function DateTimeExtensions() {

}

DateTimeExtensions.getTicks = function(date) {
    return (date.getTime() * 10000) + 621355968000000000;
};