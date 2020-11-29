BEGIN;

INSERT INTO blogful_articles (title, content, date_published)
VALUES
    ('Monday, December', 'Lorem ipsum dolor sit amet', '2016-01-16 12:00:00'),
    ('Tuesday, December', 'consectetur adipiscing elit', '2016-01-17 12:00:00'),
    ('Wednesday, December', 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', '2016-01-18 12:00:00'),
    ('Thursday, December', 'Ut enim ad minim veniam', '2016-01-19 12:00:00'),
    ('Friday, December', 'quis nostrud exercitation ullamco', '2016-01-20 12:00:00'),
    ('Saturday, December', 'laboris nisi ut aliquip ex ea commodo consequat', '2016-01-21 12:00:00'),
    ('Monday, January', 'Duis aute irure dolor in reprehenderit', '2016-01-22 12:00:00'),
    ('Tuesday, January', 'in voluptate velit ', '2016-01-23 12:00:00'),
    ('Wednesday, January', 'esse cillum dolore eu fugiat nulla pariatur', '2016-01-24 12:00:00'),
    ('Thursday, January', 'Excepteur sint occaecat', '2016-01-25 12:00:00'),
    ('Friday, January', 'cupidatat non proident', '2016-01-26 12:00:00'),
    ('Saturday, January', 'sunt in culpa qui officia', '2016-01-27 12:00:00'),
    ('Sunday, January', 'deserunt mollit anim id est laborum.', '2016-01-28 12:00:00'),
    ('Monday, February', 'Nam libero tempore', '2016-01-29 12:00:00'),
    ('Tuesday, February', 'cum soluta nobis est eligendi optio', '2016-01-30 12:00:00'),
    ('Wednesday, February', 'cumque nihil impedit', '2016-01-31 12:00:00'),
    ('Thursday, February', 'quo minus id', '2016-02-01 12:00:00'),
    ('Friday, February', 'quod maxime placeat', '2016-02-02 12:00:00'),
    ('Saturday, February', 'facere possimus', '2016-02-03 12:00:00'),
    ('Sunday, February', 'omnis voluptas assumenda est', '2016-02-04 12:00:00');

COMMIT;