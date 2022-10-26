let date = new Date(),
	now = {
		year: date.getFullYear(),
		month: date.getMonth(),
		day: date.getDate(),
		time: {
			hours: date.getHours(),
			minutes: date.getMinutes(),
			seconds: date.getSeconds(),
		},
		day_of_week: date.getDay(),
	},
	days_of_week = {
		1: "Monday",
		2: "Tuesday",
		3: "Wednesday",
		4: "Thursday",
		5: "Friday",
		6: "Saturday",
		7: "Sunday",
	},
	months = {
		1: "Jan",
		2: "Feb",
		3: "Mar",
		4: "Apr",
		5: "May",
		6: "June",
		7: "July",
		8: "Aug",
		9: "Sept",
		10: "Oct",
		11: "Nov",
		12: "Dec",
	}


function setNowToCurrentTime() {
	date = new Date();

	now = {
		year: date.getFullYear(),
		month: date.getMonth(),
		day: date.getDate(),
		time: {
			hours: date.getHours(),
			minutes: date.getMinutes(),
			seconds: date.getSeconds(),
		},
		day_of_week: date.getDay(),
	}
}

function getDoubleDigits(number) {
	if (number < 10) {
		return `0${number}`
	}
	return `${number}`
}

function getMeridian(hours) {
	if (hours < 12) {
		return "AM"
	}
	return "PM"
}

function get12Hour(hours) {
	if (hours > 12) {
		return hours - 12
	}
	return hours
}

function get24Hour(hour, meridian) {
	if (meridian == "PM") {
		return hour + 12
	}
	return hour
}

function getSec(time) {
	let { hours, minutes, seconds } = time;

	return hours*60*60 + minutes*60 + seconds;
}

function getTime(total_seconds) {
	let hours = ~~(total_seconds / 3600),
		minutes = ~~((total_seconds - hours*3600) / 60),
		seconds = total_seconds - hours*3600 - minutes*60

	return { hours: hours, minutes: minutes, seconds: seconds }
}

function getTimer(time_in_seconds) {

	let time = getTime(time_in_seconds)

	let { hours, minutes, seconds } = time,
		timer = "0:00:00"

	if (hours == 0 && minutes == 0) {
		timer = `${seconds}`
	}
	else if (hours == 0) {
		timer = `${minutes}:${getDoubleDigits(seconds)}`;
	}
	else {
		timer = `${hours}:${getDoubleDigits(minutes)}:${getDoubleDigits(seconds)}`;
	}

	return timer;
}


function displayCurrentTime() {
	elements.day_of_week.textContent = `${days_of_week[now.day_of_week]},`;
	elements.month.textContent = `${months[now.month+1]}.`;
	elements.day_of_month.textContent = `${now.day}th`;
	elements.time.textContent = `${get12Hour(now.time.hours)}:${getDoubleDigits(now.time.minutes)}:${getDoubleDigits(now.time.seconds)}`
	elements.meridian.textContent = getMeridian(now.time.hours);
}

let elements = {
	day_of_week: document.querySelector("#day_of_week_text"),
	month: document.querySelector("#month_text"),
	day_of_month: document.querySelector("#day_of_month_text"),
	time: document.querySelector("#time_text"),
	meridian: document.querySelector("#AM_or_PM_text")
}

let occasions = {
	"asleep": {
		name: "Sleep",
		color: "#111e4a",
		start_time: {
			hours: 0,
			minutes: 0,
			seconds: 0,
		},
		end_time: {
			hours: 6,
			minutes: 50,
			seconds: 0,
		},

	},
	"morning": {
		name: "Morning Routine",
		color: "#e6a42c",
		start_time: {
			hours: 6,
			minutes: 50,
			seconds: 0,
		},
		end_time: {
			hours: 7,
			minutes: 30,
			seconds: 0,
		},
	},
	"school": {
		name: "Go To School",
		color: "#bdb5a6",
		durations: [
			{
				weekdays: [1, 2, 3, 4, 5],
				start_time: {
					hours: 7,
					minutes: 30,
					seconds: 0,
				},
				end_time: {
					hours: 8,
					minutes: 0,
					seconds: 3,
				}
			},
		]

	},
	"physics": {
		name: "AP Physics 1",
		color: "#50f9ff",
		durations: [
			{
				weekdays: [1, 2, 5],
				start_time: {
					hours: 8,
					minutes: 0,
					seconds: 3,
				},
				end_time: {
					hours: 8,
					minutes: 48,
					seconds: 3,
				},
			},
			{
				weekdays: [3],
				start_time: {
					hours: 8,
					minutes: 0,
					seconds: 3,
				},
				end_time: {
					hours: 9,
					minutes: 28,
					seconds: 3,
				},
			},
		],
	},
	"pass1": {
		name: "Passing Period",
		color: "#d0d8db",
		durations: [
			{
				weekdays: [1, 2, 5],
				start_time: {
					hours: 8,
					minutes: 48,
					seconds: 3,
				},
				end_time: {
					hours: 8,
					minutes: 53,
					seconds: 3,
				},
			},
			{
				weekdays: [3, 4],
				start_time: {
					hours: 9,
					minutes: 28,
					seconds: 3,
				},
				end_time: {
					hours: 9,
					minutes: 33,
					seconds: 3,
				},
			}
		],
	},
	"english": {
		name: "English 4",
		color: "#1A9E65",
		durations: [
			{
				weekdays: [1, 2, 5],
				start_time: {
					hours: 8,
					minutes: 53,
					seconds: 3,
				},
				end_time: {
					hours: 9,
					minutes: 41,
					seconds: 3,
				},
			},
			{
				weekdays: [4],
				start_time: {
					hours: 8,
					minutes: 0,
					seconds: 3,
				},
				end_time: {
					hours: 9,
					minutes: 28,
					seconds: 3,
				},
			}
		],
	},
	"pass2": {
		name: "Passing Period",
		color: "#d0d8db",
		durations: [
			{
				weekdays: [1, 2, 5],
				start_time: {
					hours: 9,
					minutes: 41,
					seconds: 3,
				},
				end_time: {
					hours: 9,
					minutes: 46,
					seconds: 3,
				},
			}
		],
	},
	"comp_sci": {
		name: "AP Computer Science A",
		color: "#e97a3a",
		durations: [
			{
				weekdays: [1, 2, 5],
				start_time: {
					hours: 9,
					minutes: 46,
					seconds: 3,
				},
				end_time: {
					hours: 10,
					minutes: 34,
					seconds: 3,
				},
			},
			{
				weekdays: [3],
				start_time: {
					hours: 9,
					minutes: 33,
					seconds: 3,
				},
				end_time: {
					hours: 11,
					minutes: 1,
					seconds: 3,
				},
			},
		]
	},
	"pass3": {
		name: "Passing Period",
		color: "#d0d8db",
		durations: [
			{
				weekdays: [1, 2, 5],
				start_time: {
					hours: 10,
					minutes: 34,
					seconds: 3,
				},
				end_time: {
					hours: 10,
					minutes: 39,
					seconds: 3,
				},
			},
		]
	},
	"calc": {
		name: "AP Calculus BC",
		color: "#ffd900",
		durations: [
			{
				weekdays: [1, 2, 5],
				start_time: {
					hours: 10,
					minutes: 39,
					seconds: 3,
				},
				end_time: {
					hours: 11,
					minutes: 27,
					seconds: 3,
				},
			},
			{
				weekdays: [4],
				start_time: {
					hours: 9,
					minutes: 32,
					seconds: 3,
				},
				end_time: {
					hours: 11,
					minutes: 1,
					seconds: 3,
				},
			},
		],
	},
	"lunch": {
		name: "Lunch",
		color: "#9ce1ef",
		durations: [
			{
				weekdays: [1, 2, 5],
				start_time: {
					hours: 11,
					minutes: 27,
					seconds: 3,
				},
				end_time: {
					hours: 12,
					minutes: 0,
					seconds: 0,
				},
			},
			{
				weekdays: [3, 4],
				start_time: {
					hours: 11,
					minutes: 1,
					seconds: 3,
				},
				end_time: {
					hours: 12,
					minutes: 0,
					seconds: 0,
				},
			},
		]
	},
	"south_tech": {
		name: "Web & Computer Programming Class",
		color: "#ee294a",
		durations: [
			{
				weekdays: [1, 2, 3, 4, 5],
				start_time: {
					hours: 12,
					minutes: 0,
					seconds: 0,
				},
				end_time: {
					hours: 14,
					minutes: 29,
					seconds: 13,
				},
			}
		]
	},
	"live": {
		name: "Be Awake",
		color: "#cccc00",
		start_time: {
			hours: 14,
			minutes: 29,
			seconds: 13,
		},
		end_time: {
			hours: 23,
			minutes: 0,
			seconds: 0,
		},
	},
	"goodnight": {
		name: "Sleep",
		color: "#111e4a",
		start_time: {
			hours: 23,
			minutes: 0,
			seconds: 0,
		},
		end_time: {
			hours: 23,
			minutes: 59,
			seconds: 59,
		},

	},
}




for (let occasion_name in occasions) {
	let occasion = occasions[occasion_name],
		occasions_container = document.querySelector("#ocassions_container"),
		occasion_container = document.createElement("div");

	occasion_container.classList.add("ocassion_container");
	occasion_container.id = occasion_name;
	occasion_container.style["background-color"] = occasion.color;
	occasions_container.appendChild(occasion_container);

	occasion.occasion_name_p = document.createElement("p");
	occasion.occasion_name_p.classList.add("occasion_name");
	occasion.occasion_name_p.textContent = `${occasion.name}:`;

	occasion.time_passed_span = document.createElement("span");
	occasion.time_passed_span.classList.add("time_passed");

	occasion.time_left_p = document.createElement("p");
	occasion.time_left_p.classList.add("time_left");

	occasion.progress_div = document.createElement("div");
	occasion.progress_div.classList.add("progress_div");
}

// ^ Executes every frame
setInterval(function() {

	setNowToCurrentTime()
	displayCurrentTime()

	console.log(Object.keys(occasions));

	console.log("\n\n%cOccasion Loop", "font-style: bold; color: cyan; text-decoration: underline;");
	for (let occasion_name of Object.keys(occasions)) {

		console.log(`\n%c${occasion_name}`, "color: cyan;");

		let occasion = occasions[occasion_name],
			occasion_container = document.querySelector(`#${occasion_name}`),
			start_time,
			end_time,
			isToday = false,
			isHappening = false;


		if (occasion.durations) {

			console.log("%cCheck Duration", "font-style: bold; color: yellow; text-decoration: underline;");

			for (let duration of occasion.durations) {

				console.log(`if ${now.day_of_week} is in ${duration.weekdays}`)

				// Skip if not for this weekday
				if ( duration.weekdays.includes( now.day_of_week ) ) {
					isToday = true;
					({ start_time, end_time } = duration);
					continue;
				}
			}

			if (!isToday) {
				occasion_container.innerHTML = "";
				occasion_container.style.height = "0px";
				continue;
			}

		}
		else {
			({ start_time, end_time } = occasion);
		}

		console.log({ start_time, end_time });

		let now_in_sec = getSec( now.time ),
			start_in_sec = getSec( start_time ),
			end_in_sec = getSec( end_time ),
			duration_in_sec = end_in_sec - start_in_sec,
			time_left_in_sec = end_in_sec - now_in_sec,
			time_passed_in_sec = now_in_sec - start_in_sec;

		console.log({ now_in_sec, start_in_sec, end_in_sec, duration_in_sec, time_left_in_sec, time_passed_in_sec });

		// Skip if not in between start and end times
		if ( start_in_sec > now_in_sec || now_in_sec >= end_in_sec ) {
			occasion_container.innerHTML = "";
			occasion_container.style.height = "0px";
			continue;
		}

		// Add time to container
		occasion.time_left_p.textContent = getTimer(time_left_in_sec);
		occasion.time_passed_span.textContent = getTimer(time_passed_in_sec);

		// Set progress bar
		let progress_percent = (now_in_sec - start_in_sec) / duration_in_sec;
		occasion.progress_div.style.width = `${progress_percent*100}%`;

		// Add children elements
		occasion_container.style.height = "100vh";
		occasion.occasion_name_p.appendChild(occasion.time_passed_span);
		occasion_container.appendChild(occasion.occasion_name_p);
		occasion_container.appendChild(occasion.time_left_p);
		occasion_container.appendChild(occasion.progress_div);
	}
}, 1000);
