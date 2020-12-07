package app.messages.old;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

@Component
public class MessageRepository {

    private SessionFactory sessionFactory;

    public MessageRepository(SessionFactory sessionFactory) { this.sessionFactory = sessionFactory; }

    public Message saveMessage(Message message) {
        Session session = sessionFactory.getCurrentSession();
        session.save(message);
        return message;
    }

/*    private final static Log logger = LogFactory.getLog(MessageRepository.class);

    private NamedParameterJdbcTemplate jdbcTemplate;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public Message saveMessage(Message message) {
        GeneratedKeyHolder holder = new GeneratedKeyHolder();
        MapSqlParameterSource params = new MapSqlParameterSource();

        params.addValue("text", message.getText());
        params.addValue("createdDate", message.getCreatedDate());

        String insertSQL = "INSERT INTO messages (`id`, `text`, `created_date`) VALUES (null, :text, :createdDate)";

        try {
            this.jdbcTemplate.update(insertSQL, params, holder);
        } catch (DataAccessException e) {
            logger.error("메세지 저장 실패", e);
            return null;
        }

        return new Message(holder.getKey().intValue(), message.getText(), message.getCreatedDate());
    }*/

    /*private DataSource dataSource;

    public MessageRepository(DataSource dataSource) { this.dataSource = dataSource; }

    public Message saveMessage(Message message) {
        Connection c = DataSourceUtils.getConnection(dataSource);

        try {
            String insertSql = "INSERT INTO messages (`id`, `text`, `created_date`) VALUES (null, ?, ?)";

            PreparedStatement ps = c.prepareStatement(insertSql, Statement.RETURN_GENERATED_KEYS);

            // SQL을 위한 파라미터
            ps.setString(1,message.getText());
            ps.setTimestamp(2, new Timestamp(message.getCreatedDate().getTime()));

            int rowsAffected = ps.executeUpdate();

            if ( rowsAffected > 0 ) {
                // 새로 적제된 메세지 id
                ResultSet result = ps.getGeneratedKeys();

                if ( result.next() ) {
                    int id = result.getInt(1);
                    return new Message(id, message.getText(), message.getCreatedDate());
                } else {
                    logger.error("result set이 없습니다..");
                    return null;
                }
            } else {
                // 데이터 적제 실패
                return null;
            }
        } catch (SQLException e) {
            logger.error("저장에 실패했습니다.", e);

            try {
                c.close();
            } catch (SQLException ex) {
                logger.error("디비연결 종료 실패");
            }
        } finally {
            DataSourceUtils.releaseConnection(c, dataSource);
        }
        return null;
    }*/
}
