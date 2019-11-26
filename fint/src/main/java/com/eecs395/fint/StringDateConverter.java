package com.eecs395.fint;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class StringDateConverter {
	
	public static Calendar stringToCalendar(String dateString) {
		SimpleDateFormat df = new SimpleDateFormat("d MM yyyy");
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
		SimpleDateFormat df = new SimpleDateFormat("d MM yyyy");
		return df.format(cal.getTime()).toString();
	}
}
