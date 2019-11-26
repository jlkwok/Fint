package com.eecs395.fint;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class StringDateConverter {
	
	public static Calendar stringToCalendar(String dateString) {
<<<<<<< HEAD
		SimpleDateFormat df = new SimpleDateFormat("dd MM yyyy");
=======
		SimpleDateFormat df = new SimpleDateFormat("d MM yyyy");
>>>>>>> 74d249f84c6eb166b65f0db024f20140df8f91bd
		Date date;
		try {
			date = (Date)df.parse(dateString);
		} catch (ParseException e) {
			e.printStackTrace();
			return null;
		}
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		return cal;
	}
	
	public static String calendarToString(Calendar cal) {
<<<<<<< HEAD
		SimpleDateFormat df = new SimpleDateFormat("dd MM yyyy");
=======
		SimpleDateFormat df = new SimpleDateFormat("d MM yyyy");
>>>>>>> 74d249f84c6eb166b65f0db024f20140df8f91bd
		return df.format(cal.getTime()).toString();
	}
}
