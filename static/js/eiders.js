function iso8601_to_html(duration)
{
  return duration.replace("PT","").replace("H"," h ").replace("M"," min ").replace("S"," sec")
}

