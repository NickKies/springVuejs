import MessageListItem from './messageListItem.js';
export default {
    name: 'MessageList',
    template: `<ul>
                    <message-list-item 
                        v-for="item in items" 
                        :item="item"
                        :key="item.id"
                        @delete="deleteMessage(item)"
                    ></message-list-item>
               </ul>`,
    components: {
        MessageListItem
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    methods: {
        deleteMessage(message) {
            this.$emit('delete', message);
        }
    }
}