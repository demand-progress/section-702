
    <form action="#" method="get" className={this.state.sent ? 'sent' : false}>
        <div className="wrapper">
            <h4>Who did you speak with?</h4>
            <input required="required" type="text" name="Who did you speak with?" id="who" />
            <h4>How did it go?</h4>
            <input required="required" type="text" name="How did it go?" id="how" />
            <br />
            <div id="thanks">Thank you!</div>
            <button onClick={this.onClickSendFeedback} type="submit" name="submit">Send Feedback</button>
        </div>
    </form>