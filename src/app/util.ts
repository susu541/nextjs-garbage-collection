export function getWeekOfMonth(date: Date): number | null {
    // 月の最初の日を取得
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    
    // 月の最初の日の曜日
    const firstDayWeekdayIndex = firstDayOfMonth.getDay();
    
    // 指定した日の曜日
    const weekdayIndex = date.getDay();
    
    // 最初の指定曜日の日付を計算
    const daysOffset = (weekdayIndex - firstDayWeekdayIndex + 7) % 7;
    const firstWeekdayDate = new Date(date.getFullYear(), date.getMonth(), 1 + daysOffset);

    // 指定した日付がその月の第何週目かを計算
    const weekOfMonth = Math.ceil((date.getDate() - firstWeekdayDate.getDate() + 1) / 7);

    return weekOfMonth;
}