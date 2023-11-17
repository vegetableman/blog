{{ $timeline1 := getJSON (print "posts/interfaces/demos/unobtrusive/timeline.json") | jsonify }}

let timeline1 = {{ $timeline1 }}